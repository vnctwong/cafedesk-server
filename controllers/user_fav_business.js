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


// create(user) {
//   //returning what/where
//   return User
//     .create({
//       // where to get value
//       name: 'just test name',
//     })
// },
// findAll() {
//   return User.findAll();
// },

// findUserById(searchId) {
//   // return User where id = searchId
//   return User.findByPk(searchId)
// }