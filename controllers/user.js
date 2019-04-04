const User = require('../models').User;

module.exports = {
  create(user) {
    //returning what/where
    return User
      .create({
        // where to get value
        name: 'just test name',
      })
  },
  findAll() {
    return User.findAll();
  },

  findUserById(searchId) {
    // return User where id = searchId
    return User.findByPk(searchId)
  }

}