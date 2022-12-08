'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.hasMany(models.Bet, { foreignKey: 'game_id' })
    }
  }
  Game.init(
    {
      home_team: DataTypes.STRING,
      home_ML: DataTypes.INTEGER,
      home_spread: DataTypes.INTEGER,
      away_team: DataTypes.STRING,
      away_ML: DataTypes.INTEGER,
      away_spread: DataTypes.INTEGER,
      date: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Game',
      tableName: 'games'
    }
  )
  return Game
}
