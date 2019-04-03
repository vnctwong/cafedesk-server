'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Businesses', [{
      name: 'Business1',
      address: 'Address1',
      img_url: 'dataType = string',
      yelp_id: 'dataType = string',
      createdAt: new Date(),
      updatedAt: new Date(),
      longitude: '-123.456',
      latitude: '123.456',
    }, {
      name: 'Business2',
      address: 'Address2',
      img_url: 'dataType = string',
      yelp_id: 'dataType = string',
      createdAt: new Date(),
      updatedAt: new Date(),
      longitude: '-123.456',
      latitude: '123.456',
    }, {
      name: 'Business3',
      address: 'Address3',
      img_url: 'dataType = string',
      yelp_id: 'dataType = string',
      createdAt: new Date(),
      updatedAt: new Date(),
      longitude: '-123.456',
      latitude: '123.456',
    }], )
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Businesses', null, {});

  }
};