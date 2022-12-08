const { Bet, User, Game } = require('../models')
const middleware = require('../middleware')

const createBet = async (req, res) => {
  try {
    let bet = await Bet.create(req.body)
    res.send(bet)
  } catch (error) {
    throw error
  }
}

const getAllBets = async (req, res) => {
  try {
    let bet = await Bet.findAll({
      include: [
        { model: User, attributes: ['username'] },
        { model: Game, attributes: ['home_team', 'away_team'] }
      ]
    })
    res.send(bet)
  } catch (error) {
    throw error
  }
}

const getBetById = async (req, res) => {
  try {
    let bet = await Bet.findByPk(req.params.bet_id)
    res.send(bet)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createBet,
  getAllBets,
  getBetById
}
