module.exports = (sequelize, DataTypes) => {
  const User_viewed_business = sequelize.define('User_viewed_business', {
    viewed: DataTypes.BOOLEAN
  }, {});
  User_viewed_business.associate = (models) => {
    // associations can be defined here
    User_viewed_business.belongsTo(models.Business);
    User_viewed_business.belongsTo(models.User);
  };
  return User_viewed_business;
};
