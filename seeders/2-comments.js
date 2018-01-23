'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('comments', [{
        comment: 'this is weird',
        drinkId: 1,
        userId: 1
      },
      {
        comment: 'this is another commment',
        drinkId: 1,
        userId: 2
      },
      {
        comment: 'this is my super comment',
        drinkId: 2,
        userId: 1
      },
      {
        comment: 'what????',
        drinkId: 3,
        userId: 2
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('comments', null, {});
  }
};
