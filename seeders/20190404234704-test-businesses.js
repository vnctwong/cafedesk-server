'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('People', [{
    //   name: 'John Doe',
    //   isBetaMember: false
    // }], {});   
    return queryInterface.bulkInsert('Businesses', [{
      name: 'Timbertrain',
      yelp_id: 'MTrkGD8e4LRxTpUiYek9aQ',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Revolver',
      yelp_id: "dX6y4zA-1AtWsYnT4AZXNg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `Thierry's`,
      yelp_id: "KXCXaF5qimmtKKqnPc_LQA",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `49th Parallel Coffee`,
      yelp_id: "-d473gtB7sazHlWu_1a2CA",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `Honolulu Coffee`,
      yelp_id: "-OjVRMDAvq93MOmPCd23uCA",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `Pacific Coffee Roasters`,
      yelp_id: "zMQNKgVrav_zVsiZYi3jNg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `Quantum Coffee`,
      yelp_id: "s3bO4gh6HnsTA1ga6TRMAg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `Small Victory Bakery`,
      yelp_id: "d9j1BELXo1E8wdEiIQAzKw",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `Koffie`,
      yelp_id: "Sj94I82l_cUvFDkMiQXuLw",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `The Drop Coffee`,
      yelp_id: "7frP_EAuworLHTVB-SDQrw",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  down: (queryInterface, Sequelize) => {
    // Example:
    // return queryInterface.bulkDelete('People', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};
