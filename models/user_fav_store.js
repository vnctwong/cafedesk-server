'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_fav_store = sequelize.define('User_fav_store', {
    is_favorite: DataTypes.BOOLEAN
  }, {});
  User_fav_store.associate = function (models) {
    // associations can be defined here
    User_fav_store.belongsTo(models.Business);
    User_fav_store.belongsTo(models.User);
  };
  return User_fav_store;
};