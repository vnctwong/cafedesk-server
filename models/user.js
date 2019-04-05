module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
  }, {});

  User.associate = ({
    Business,
  }) => {
    // associations can be defined here
    User.belongsToMany(Business, {
      through: 'User_fav_business',
      as: 'Favs',
      foreignKey: 'UserId',
    });

    User.belongsToMany(Business, {
      through: 'User_viewed_business',
      as: 'Views',
      foreignKey: 'UserId',
    });
  };

  return User;
};
