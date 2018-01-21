'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('drinks', [{
        drink_name: 'Absinthe',
        description: 'Who are you Marilyn Manson?',
        image_link: 'http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/pembroke-welsh-corgi-hero.jpg'
      },
      {
        drink_name: 'Everclear',
        description: 'A vodka product',
        image_link: 'http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/pembroke-welsh-corgi-hero.jpg'
      },
      {
        drink_name: 'Jager',
        description: 'A death wish',
        image_link: 'http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/pembroke-welsh-corgi-hero.jpg'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('drinks', null, {});
  }
};
