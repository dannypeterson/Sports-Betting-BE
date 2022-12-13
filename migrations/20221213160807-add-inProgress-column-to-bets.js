'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('bets', 'inProgress', {
      type: Sequelize.BOOLEAN
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('bets', 'inProgress')
  }
}
