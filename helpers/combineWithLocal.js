/* eslint-disable indent */
const db = require('../models');
const {
  isFavourite,
} = require('../helpers/isFavourite');
const {
  getTags,
} = require('../helpers/getTags');

// combines remote (yelp) data with local data
function combineWithLocalInfo(yelpResults, user_id = 1) {
  const output = [];

  return new Promise((ful) => {
    yelpResults.data.businesses.map((yelpElem) => {
      db.Business.findOrCreate({
          where: {
            yelp_id: yelpElem.id,
          },
          defaults: {
            yelp_id: yelpElem.id,
            name: yelpElem.name,
          },
        })
        .then((localElem) => {
          const elemOut = {
            ...yelpElem,
            ...localElem[0].dataValues,
          };

          // add favourite and tag info to business
          isFavourite(user_id, localElem[0].id)
            .then((result) => {
              elemOut.is_favourite = result !== null;
            });
          getTags(localElem[0].id)
            .then((result) => {
              elemOut.tags = result;
            })
            .finally(() => {
              output.push(elemOut);
              if (output.length === yelpResults.data.businesses.length) {
                ful(output);
              }
            });
        });
    });
  });
}

function combineOneWithLocalInfo(yelpElem, user_id = 1) {
  return new Promise((ful) => {
    db.Business.findOrCreate({
        where: {
          yelp_id: yelpElem.data.id,
        },
        defaults: {
          yelp_id: yelpElem.data.id,
          name: yelpElem.data.name,
        },
      })
      .then((localElem) => {
        const output = {
          ...yelpElem.data,
          ...localElem[0].dataValues,
        };

        // add favourite and tag info to business
        isFavourite(user_id, localElem[0].id)
          .then((result) => {
            output.is_favourite = result !== null;
          });




        getTags(localElem[0].id)
          .then((result) => {
            output.tags = result;
          })
          .finally(() => {
            ful(output);
          });
      });
  });
}

module.exports = {
  combineWithLocalInfo,
  combineOneWithLocalInfo,
};
