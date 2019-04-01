'use strict';
module.exports = (sequelize, DataTypes) => {

  const open_hours = sequelize.define('open_hours', {
    day: DataTypes.INTEGER,
    open_time: DataTypes.STRING,
    close_time: DataTypes.STRING
  }, {});

  open_hours.associate = function (models) {
    // associations can be defined here
  };
  return open_hours;
};