'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('bets', 'win_or_lose', 'won')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('bets', 'won', 'win_or_lose')
  }
}
