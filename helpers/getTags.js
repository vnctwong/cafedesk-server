/* eslint-disable indent */
const db = require('../models');

function getTags(business_id) {
  const tags = business_id ?
    db.Tag.findAll({
      where: {
        BusinessId: business_id,
      },
    }) : db.Tag.findAll();

  return tags
    .then((results) => {
      if (results.length === 0) {
        return Promise.reject('No results found');
      }

      return results;
    })
    // sort tags by count and return as array
    .map(tag => tag.get('name'))
    .reduce((tagObj, count) => {
      tagObj[count] = (tagObj[count] || 0) + 1;
      return tagObj;
    }, {})
    .then((tagObj) => {
      let sortedArray = Object.keys(tagObj).sort((a, b) => tagObj[b] - tagObj[a]);
      return sortedArray;
    });
}

module.exports = {
  getTags,
};
