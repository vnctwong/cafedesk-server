const express = require('express');
const {
  Op,
} = require('sequelize');
const yelp = require('../api/yelp');
const Business = require('../controllers/business');
const db = require('../models');

const router = express.Router();

module.exports = () => {
  // search route
  router.get('/:keyword', (req, res) => {
    yelp.search(req.params.keyword)
      .then((yelpResults) => {
        return combineWithLocalInfo(yelpResults);
      })
      .then((mappedResults) => {
        res.status(200).send(mappedResults);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  return router;
};

async function isFavourite(user_id, business_id) {
  db.User.fav.businesses.findOne({
      where: {
        UserId: user_id,
        BusinessId: business_id,
      },
    })
    .then((result) => {
      return result.length !== 0;
    });
}

function combineWithLocalInfo(yelpResults) {
  return new Promise((ful, rej) => {
    const output = [];

    yelpResults.data.businesses.map((yelpElem) => {
      db.Business.findOrCreate({
          where: {
            yelp_id: yelpElem.id,
          },
          defaults: {
            yelp_id: yelpElem.id,
            name: yelpElem.name,
          }
        })
        .then((localElem) => {
          output.push({
            ...yelpElem,
            ...localElem[0].dataValues,
            is_favourite: true,
          });

          if (output.length === yelpResults.data.businesses.length) {
            ful(output);
          }
        });
    });
  });
}
