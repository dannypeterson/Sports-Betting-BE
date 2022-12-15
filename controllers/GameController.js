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

const deleteGame = async () => {
  try {
    Game.destroy({ where: { id: req.params.game_id } })
    res.send('game deleted')
  } catch (error) {}
}

const updateAllGames = async (req, res) => {
  try {
    req.body.forEach(async (game) => {
      await Game.update(game, {
        where: { id: game.id, inProgress: true },
        returning: true
      })
    })
    res.send('success')
  } catch (error) {
    throw error
  }
}

module.exports = {
  createGame,
  getGames,
  updateGame,
  updateAllGames,
  deleteGame
}
