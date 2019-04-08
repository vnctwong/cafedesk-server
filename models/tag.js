module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    BusinessId: DataTypes.INTEGER,
  }, {});

  return Tag;
};
