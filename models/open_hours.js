'use strict';
module.exports = (sequelize, DataTypes) => {
  const Open_hours = sequelize.define('Open_hours', {
    day: DataTypes.INTEGER,
    open_time: DataTypes.STRING,
    close_time: DataTypes.STRING
  }, {});
  Open_hours.associate = function (models) {
    Open_hours.belongsTo(models.Business)
  };
  return Open_hours;
};