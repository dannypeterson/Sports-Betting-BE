'use strict'
const { Model } = require('sequelize')
const { FOREIGNKEYS } = require('sequelize/types/query-types')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Bet, { foreignKey: 'user_id' })
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      passwordDigest: { type: DataTypes.STRING, allowNull: false },
      balance: { type: DataTypes.INTEGER, defaultValue: 1000 }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
