'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [{
        name: 'Has few outlets',
        UserId: 1,
        BusinessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Quiet',
        UserId: 2,
        BusinessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Quiet',
        UserId: 3,
        BusinessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Good for groups',
        UserId: 1,
        BusinessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Has lots of outlets',
        UserId: 1,
        BusinessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Close to skytrain',
        UserId: 1,
        BusinessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Good ambient music',
        UserId: 1,
        BusinessId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Comfortable chairs',
        UserId: 1,
        BusinessId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Friendly staff',
        UserId: 1,
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
