'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {});

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Tag);
    User.hasMany(models.User_fav_store);
    User.hasMany(models.User_view_store);
  };

  return User;
};