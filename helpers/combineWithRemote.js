const yelp = require('../api/yelp');
const {
  isFavourite,
} = require('../helpers/isFavourite');
const {
  getTags,
} = require('../helpers/getTags');

function combineWithRemoteInfo(localResults, user_id = 1) {
  return new Promise((ful, rej) => {
    const output = [];

    localResults.map((localElem) => {
      yelp.getBusiness(localElem.yelp_id)
        .then((yelpElem) => {
          const elemOut = {
            ...yelpElem.data,
            ...localElem.dataValues,
          };

          isFavourite(user_id, localElem.id)
            .then((result) => {
              elemOut.is_favourite = result !== null;
            });
          getTags(localElem.id)
            .then((result) => {
              elemOut.tags = result;
            })
            .finally(() => {
              output.push(elemOut);
              if (output.length === localResults.length) {
                ful(output);
              }
            });
        });
    });
  });
}

module.exports = {
  combineWithRemoteInfo,
};
