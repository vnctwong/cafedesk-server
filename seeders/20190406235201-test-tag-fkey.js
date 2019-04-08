'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [{
        name: 'has outlets',
        UserId: 1,
        BusinessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'quiet',
        UserId: 2,
        BusinessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'quiet',
        UserId: 3,
        BusinessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  },
};
// EMPTY FIELD INSERT STILL WORKS, JUST RETURNS NULL
