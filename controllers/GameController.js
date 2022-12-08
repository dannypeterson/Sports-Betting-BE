const { Game } = require('../models')

const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body)
    res.send(game)
  } catch (error) {}
}

module.exports = {
  createGame
}
