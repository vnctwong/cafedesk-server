const User_fav_business = require('../models').User_fav_business;

module.exports = {
  create(user_id, business_id) {
    return User_fav_business
      .create({
        is_favourite: true,
        userId: user_id,
        businessId: business_id,
      })
  },
  findByUserId(searchUserFK) {
    return User_fav_business.findOne({
      where: {
        UserId: searchUserFK
      }
    })
  },
}