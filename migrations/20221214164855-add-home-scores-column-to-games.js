'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('games', 'home_team_score', {
      type: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('games', 'home_team_score')
  }
}
