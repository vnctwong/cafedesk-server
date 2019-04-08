'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('People', [{
    //   name: 'John Doe',
    //   isBetaMember: false
    // }], {});   
    return queryInterface.bulkInsert('Businesses', [{
      name: 'Timbertrain',
      img_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/KIK0gx07BPQ1UMxhB994vQ/o.jpg',
      yelp_id: 'MTrkGD8e4LRxTpUiYek9aQ',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Revolver',
      img_url: "https://s3-media4.fl.yelpcdn.com/bphoto/CAExZOlAizC-yyLZrZt4xQ/o.jpg",
      yelp_id: "dX6y4zA-1AtWsYnT4AZXNg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `Thierry's`,
      img_url: "https://s3-media3.fl.yelpcdn.com/bphoto/HSXNNwhDpfM1VJgQISbChw/o.jpg",
      yelp_id: "KXCXaF5qimmtKKqnPc_LQA",
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
