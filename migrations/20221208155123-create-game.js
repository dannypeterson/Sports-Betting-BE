'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      home_team: {
        type: Sequelize.STRING
      },
      home_ML: {
        type: Sequelize.INTEGER
      },
      home_spread: {
        type: Sequelize.JSON
      },
      away_team: {
        type: Sequelize.STRING
      },
      away_ML: {
        type: Sequelize.INTEGER
      },
      away_spread: {
        type: Sequelize.JSON
      },
      over: {
        type: Sequelize.JSON
      },
      under: {
        type: Sequelize.JSON
      },
      date: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games')
  }
}
