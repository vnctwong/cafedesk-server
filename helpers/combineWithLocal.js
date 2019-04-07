const db = require('../models');
const {
  isFavourite
} = require('../helpers/isFavourite');

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
              output.push(elemOut);
            })
            .finally(() => {
              if (output.length === yelpResults.data.businesses.length) {
                ful(output);
              }
            });
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
        const output = {
          ...yelpElem.data,
          ...localElem[0].dataValues,
        };
        isFavourite(1, localElem[0].id)
          .then((result) => {
            output.is_favourite = result !== null;
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
