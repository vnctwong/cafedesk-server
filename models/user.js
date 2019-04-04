module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
  }, {});

  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Tag);
    const {
      Business,
    } = models;
    User.belongsToMany(Business, {
      through: 'User_fav_business',
      as: 'Favs',
      foreignKey: 'UserId',
    });
    Business.belongsToMany(User, {
      through: 'User_fav_business',
    });


    User.hasMany(models.User_viewed_business);
  };

  return User;
};
