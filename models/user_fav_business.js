'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_fav_business = sequelize.define('User_fav_business', {

    is_favourite: DataTypes.BOOLEAN,

  }, {});

  // User_fav_business.associate = function (models) {

  //   User_fav_business.belongsTo(models.Business);
  //   User_fav_business.belongsTo(models.User);

  // };
  return User_fav_business;
};