module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
  }, {});

  User.associate = ({
    Business,
  }) => {

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

    User.belongsToMany(Business, {
      through: 'Tag',
      as: 'Tags',
      foreignKey: 'UserId',
    });
  };

  return User;
};
