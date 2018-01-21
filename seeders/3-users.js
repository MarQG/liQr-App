'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [{
        username : "Ferenc Gutierrez",
        first_name : "Ferenc",
        last_name : "Gutierrez",
        email : "ferenc.g87@gmail.com",
        password : "$2a$08$sWZt3NsAmQsKmABPrRAChO41DKN3cB47rb6qYChvZjhHja2Ol50Hm",
        last_login : null,
        status : "active"
      },{
        username : "Collin Cavallo",
        first_name : "Collin",
        last_name : "Gutierrez",
        email : "collin@gmail.com",
        password : "$2a$08$sWZt3NsAmQsKmABPrRAChO41DKN3cB47rb6qYChvZjhHja2Ol50Hm",
        last_login : null,
        status : "active"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('users', null, {});
  }
};
