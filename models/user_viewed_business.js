module.exports = (sequelize, DataTypes) => {
  const User_viewed_business = sequelize.define('User_viewed_business', {
    viewed: DataTypes.BOOLEAN
  }, {});

  return User_viewed_business;
};
