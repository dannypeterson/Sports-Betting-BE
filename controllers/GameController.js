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

const updateGame = async (req, res) => {
  try {
    let game = await Game.update(
      { ...req.body },
      { where: { id: req.params.game_id }, returning: true }
    )
    res.send(game)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createGame,
  getGames,
  updateGame
}
