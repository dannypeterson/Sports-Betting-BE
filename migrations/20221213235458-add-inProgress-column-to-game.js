'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('games', 'inProgress', {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('games', 'inProgress')
  }
}
