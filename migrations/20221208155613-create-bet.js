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
      amount: {
        type: Sequelize.INTEGER
      },
      payout: {
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER,
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
