'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
        'Businesses',
        'longitude', {
          allowNull: false,
          type: Sequelize.FLOAT,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
      .then(() => {

        return queryInterface.addColumn(
          'Businesses',
          'latitude', {
            allowNull: false,
            type: Sequelize.FLOAT,
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        )
      });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
        'Businesses',
        'longitude'
      )
      .then(() => {
        return queryInterface.removeColumn(
          'Businesses',
          'latitude'
        )
      })
  }
};