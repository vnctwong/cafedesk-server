'use strict';
module.exports = (sequelize, DataTypes) => {

  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    img_url: DataTypes.STRING(1234),
    address: DataTypes.STRING,
    yelp_id: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
  }, {});

  Business.associate = function (models) {
    // associations can be defined here
    Business.hasMany(models.Open_hours);
    Business.hasMany(models.Tag);
    Business.hasMany(models.User_fav_business);
    Business.hasMany(models.User_viewed_business);
  };

  return Business;
};