'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bet.belongsTo(models.User, { foreignKey: 'user_id' })
      Bet.belongsTo(models.Game, { foreignKey: 'game_id' })
    }
  }
  Bet.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      game_id: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'games',
          key: 'id'
        }
      },
      type: DataTypes.STRING,
      team: DataTypes.STRING,
      odds: DataTypes.STRING,
      points: DataTypes.STRING,
      wager: DataTypes.INTEGER,
      to_win: DataTypes.INTEGER,
      won: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Bet',
      tableName: 'bets'
    }
  )
  return Bet
}
