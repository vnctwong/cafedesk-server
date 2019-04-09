/* eslint-disable no-restricted-syntax */
const express = require('express');
const {
  Op,
} = require('sequelize');
const db = require('../models');
const {
  combineWithRemoteInfo,
} = require('../helpers/combineWithRemote');
const {
  combineWithLocalInfo,
} = require('../helpers/combineWithLocal');
const yelp = require('../api/yelp');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    const tags = ['Quiet', 'Outlets', 'Relaxing Music', 'Good For Groups', 'Close To Skytrain', 'Cheap', 'Lively', 'Comfortable Chairs', 'Food', 'Friendly', 'Baked Goods', 'Not Busy', 'Air-Conditioning', 'Well Lit', 'Laptop Friendly', 'Free Wifi'];
    db.Tag.findAll({
        where: {
          name: {
            [Op.or]: tags,
          },
        },
      })
      .then((result) => {
        if (result.length === 0) {
          return Promise.reject('No results found');
        }

        return result;
      })
      .map(tag => tag.get('BusinessId'))
      .reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])
      .then((businessIdArray) => {
        db.Business.findAll({
            where: {
              id: {
                [Op.or]: businessIdArray,
              },
            },
          })
          .then(businessResults => combineWithRemoteInfo(businessResults))
          .then((combinedResults) => {
            res.send(combinedResults);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  router.get('/v2', (req, res) => {
    const tags = req.params.tags || ['Quiet', 'Outlets', 'Friendly'];

    yelp.search('cafe', req.params.longitude, req.params.latitude)
      .then(results => combineWithLocalInfo(results))
      .then((combinedResults) => {
        const finalResults = [];

        for (const i in combinedResults) {
          if (combinedResults[i].tags && combinedResults[i].tags.filter(element => tags.includes(element)).length !== 0) {
            finalResults.push(combinedResults[i]);
          }
        }

        if (finalResults.length > 0) {
          res.status(200).send(finalResults);
        } else {
          res.status(500).send('No results found');
        }
      });
  });


  return router;
};
