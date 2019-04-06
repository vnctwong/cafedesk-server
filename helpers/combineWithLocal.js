const {
  Op,
} = require('sequelize');
const db = require('../models');

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

function combineOneWithLocalInfo(yelpElem) {
  return new Promise((ful, rej) => {

    db.Business.findOrCreate({
        where: {
          yelp_id: yelpElem.data.id,
        },
        defaults: {
          yelp_id: yelpElem.data.id,
          name: yelpElem.data.name,
        }
      })
      .then((localElem) => {
        ful({
          ...yelpElem.data,
          ...localElem[0].dataValues,
          is_favourite: true,
        });
      });
  });
}

module.exports = {
  combineWithLocalInfo,
  combineOneWithLocalInfo,
};
