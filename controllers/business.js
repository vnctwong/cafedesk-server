const Business = require('../models').Business;
const {
  Op
} = require('Sequelize');

module.exports = {
  create(business) {
    return Business
      .create({
        name: business.name,
        img_url: business.image_url,
        address: business.location.display_address.join(' '),
        longitude: business.coordinates.longitude,
        latitude: business.coordinates.latitude,
        yelp_id: business.id,
      });
  },

  search(query) {
    return Business.findAll({
        where: {
          name: {
            [Op.iLike]: '%' + query + '%'
          }
        }
      })
      .then((searchResults) => {
        return combineWithLocalInfo(searchResults);
      });
  }
}
