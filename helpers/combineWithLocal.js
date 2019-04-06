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

module.exports = {
  combineWithLocalInfo,
};
