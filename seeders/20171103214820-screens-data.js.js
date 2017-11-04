'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Screen', [
    {
      name: 'screen-1',
      seats: 10
    },
    {
      name: 'screen-2',
      seats: 15
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Screen', null, {});
  }
};
