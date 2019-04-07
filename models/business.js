module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    img_url: DataTypes.STRING(1234),
    address: DataTypes.STRING,
    yelp_id: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
  }, {});

  Business.associate = ({
    User,
  }) => {
    // associations can be defined here
    Business.belongsToMany(User, {
      through: 'User_fav_business',
      as: 'Favs',
      foreignKey: 'BusinessId',
    });

    Business.belongsToMany(User, {
      through: 'User_viewed_business',
      as: 'Views',
      foreignKey: 'BusinessId',
    });

    Business.belongsToMany(User, {
      through: 'Tag',
      as: 'Tags',
      foreignKey: 'BusinessId',
    });
  };

  return Business;
};
