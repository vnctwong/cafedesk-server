const yelp = require('../api/yelp');

function combineWithRemoteInfo(localResults) {
  return new Promise((ful, rej) => {
    const output = [];

    localResults.map((localElem) => {
      yelp.getBusiness(localElem.yelp_id)
        .then((yelpElem) => {
          console.log(yelpElem.data)
          output.push({
            ...yelpElem.data,
            ...localElem.dataValues,
            is_favourite: true,
          });

          if (output.length === localResults.length) {
            ful(output);
          }
        });
    });
  });
}

module.exports = {
  combineWithRemoteInfo,
};
