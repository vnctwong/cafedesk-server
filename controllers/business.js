const Business = require('../models').Business;
const Op = require('Sequelize').Op;

module.exports = {
  create(business) {
    return Business
      .create({
        name: business.name,
        address: business.location.display_address.join(' '),
        description: "beep boop i'm a robot",
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
    });
  }
}
