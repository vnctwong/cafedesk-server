const yelp = require('../api/yelp');
const {
  isFavourite,
} = require('../helpers/isFavourite');

function combineWithRemoteInfo(localResults) {
  return new Promise((ful, rej) => {
    const output = [];

    localResults.map((localElem) => {
      yelp.getBusiness(localElem.yelp_id)
        .then((yelpElem) => {
          const elemOut = {
            ...yelpElem.data,
            ...localElem.dataValues,
          };

          isFavourite(1, localElem.id)
            .then((result) => {
              elemOut.is_favourite = result !== null;
              output.push(elemOut);
            })
            .finally(() => {
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
