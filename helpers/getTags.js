const {
  Op,
} = require('sequelize');
const db = require('../models');

function getTags(business_id) {
  return db.Tag.findAll({
    where: {
      BusinessId: business_id,
    },
  });
}

module.exports = {
  getTags,
};
