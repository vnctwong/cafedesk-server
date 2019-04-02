'use strict';
module.exports = (sequelize, DataTypes) => {

  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    img_url: DataTypes.STRING(1234),
    address: DataTypes.STRING,
    yelp_id: DataTypes.STRING,
  }, {});

  Business.associate = function (models) {
    // associations can be defined here
    Business.hasMany(models.Open_hours);
    Business.hasMany(models.Tag);
    Business.hasMany(models.User_fav_store);
    Business.hasMany(models.User_view_store);
  };

  return Business;
};
