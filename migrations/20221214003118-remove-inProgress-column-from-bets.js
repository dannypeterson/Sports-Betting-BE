'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('bets', 'inProgress')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('bets', 'inProgress')
  }
}
