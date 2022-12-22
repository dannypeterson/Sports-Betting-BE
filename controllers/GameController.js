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

const deleteGame = async (req, res) => {
  try {
    await Game.destroy({ where: { id: req.params.game_id } })
    res.send({ msg: 'game deleted' })
  } catch (error) {
    throw error
  }
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
