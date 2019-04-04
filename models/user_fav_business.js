module.exports = (sequelize, DataTypes) => {
  const User_fav_business = sequelize.define('User_fav_business', {
    is_favourite: DataTypes.BOOLEAN,
  }, {});
  return User_fav_business;
};
