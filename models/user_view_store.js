'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_view_store = sequelize.define('User_view_store', {
    viewed: DataTypes.BOOLEAN
  }, {});
  User_view_store.associate = function (models) {
    // associations can be defined here
    User_view_store.belongsTo(models.Business);
    User_view_store.belongsTo(models.User);
  };
  return User_view_store;
};