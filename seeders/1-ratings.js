'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('ratings', [{
        rating: true,
        userId: 1,
        drinkId: 1
      },
      {
        rating: false,
        userId: 2,
        drinkId: 1
      },
      {
        rating: true,
        userId: 1,
        drinkId: 2
      },
      {
        rating: false,
        userId: 2,
        drinkId: 2
      },
      {
        rating: false,
        userId: 1,
        drinkId: 3
      },
      {
        rating: false,
        userId: 2,
        drinkId: 3
      }], {
        
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ratings', null, {});
  }
};
