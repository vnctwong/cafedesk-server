'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
        'Open_hours',
        'BusinessId', {
          type: Sequelize.INTEGER,
          references: {
            model: 'Businesses',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
      )
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'Tags', // name of Target model
          'UserId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'Tags', // name of Target model
          'BusinessId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Businesses', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'User_fav_businesses', // name of Target model
          'BusinessId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Businesses', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'User_viewed_businesses', // name of Target model
          'BusinessId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Businesses', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'User_fav_businesses', // name of Target model
          'UserId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        // Payment hasOne Order
        return queryInterface.addColumn(
          'User_view_businesses', // name of Target model
          'UserId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
        'Open_hours', // name of the Target model
        'BusinessId' // key we want to remove
      )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Tags', // name of the Target model
          'UserId' // key we want to remove
        );
      })
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'Tags', // name of the Target model
          'BusinessId' // key we want to remove
        );
      })
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'User_fav_businesses', // name of the Target model
          'BusinessId', // key we want to remove
        );
      })
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'User_fav_businesses', // name of the Target model
          'UserId' // key we want to remove
        );
      })
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'User_viewed_businesses', // name of the Target model
          'UserId' // key we want to remove
        );
      })
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'User_viewed_businesses', // name of the Target model
          'BusinessId' // key we want to remove
        );
      })

  }
};