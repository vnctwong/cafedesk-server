const db = require('../models');
const {
  isFavourite,
} = require('../helpers/isFavourite');
const {
  getTags,
} = require('../helpers/getTags');

function combineWithLocalInfo(yelpResults, user_id = 1) {
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
          const elemOut = {
            ...yelpElem,
            ...localElem[0].dataValues,
          };

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
        const output = {
          ...yelpElem.data,
          ...localElem[0].dataValues,
        };
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
