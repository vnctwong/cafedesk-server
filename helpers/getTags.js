const db = require('../models');

function getTags(business_id) {
  return db.Tag.findAll({
      where: {
        BusinessId: business_id,
      },
    })
    .then((results) => {
      if (results.length === 0) {
        return Promise.reject('No results found');
      }

      return results;
    })
    .map(tag => tag.get('name'))
    .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
}

module.exports = {
  getTags,
};
