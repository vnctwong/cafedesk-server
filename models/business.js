'use strict';
module.exports = (sequelize, DataTypes) => {

  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING(1234)
  }, {});

  Business.associate = function (models) {
    // associations can be defined here
  };

  return Business;
};