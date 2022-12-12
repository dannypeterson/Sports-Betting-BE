const { Game } = require('../models')

const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body)
    res.send(game)
  } catch (error) {
    throw error
  }
}

const getGames = async (req, res) => {
  try {
    let games = await Game.findAll()
    res.send(games)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createGame,
  getGames
}
