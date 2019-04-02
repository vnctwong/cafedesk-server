'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Businesses', [{
      name: 'Business1',
      address: 'Address1',
      description: 'description1',
      yelp_id: 'yelp_id1 string',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Business2',
      address: 'Address2',
      description: 'description2',
      yelp_id: 'yelp_id2 string',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Business3',
      address: 'Address3',
      description: 'description3',
      yelp_id: 'yelp_id3 string',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], )
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Businesses', null, {});

  }
};