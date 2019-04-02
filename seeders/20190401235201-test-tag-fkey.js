'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [{
      name: 'tag1',
      rated: true,
      UserId: null,
      BusinessId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'tag2',
      rated: false,
      // UserId: null,
      // BusinessId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], )
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tags', null, {});

  }
};

// EMPTY FIELD INSERT STILL WORKS, JUST RETURNS NULL