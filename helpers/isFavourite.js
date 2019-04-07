const {
  Op,
} = require('sequelize');
const db = require('../models');

function isFavourite(user_id, business_id) {
  return db.User_fav_business.findOne({
    where: {
      [Op.and]: {
        UserId: user_id,
        BusinessId: business_id,
      },
    },
  });
}

module.exports = {
  isFavourite,
};
