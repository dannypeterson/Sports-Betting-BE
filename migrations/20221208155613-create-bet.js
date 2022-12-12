'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      odds: {
        type: Sequelize.STRING
      },
      wager: {
        type: Sequelize.INTEGER
      },
      points: {
        type: Sequelize.STRING
      },
      to_win: {
        type: Sequelize.INTEGER
      },
      win_or_lose: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCASDE',
        refences: {
          model: 'users',
          key: 'id'
        }
      },
      game_id: {
        type: Sequelize.STRING,
        onDelete: 'CASCASDE',
        refences: {
          model: 'games',
          key: 'id'
        }
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bets')
  }
}
