const { Bet } = require('../models')
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
    let bet = await Bet.findAll()
    res.send(bet)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createBet,
  getAllBets
}
