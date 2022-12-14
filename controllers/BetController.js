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
      include: {
        model: Game,
        attributes: [
          'home_team',
          'home_ML',
          'home_spread',
          'away_team',
          'away_ML',
          'away_spread',
          'over',
          'under',
          'date',
          'id',
          'inProgress'
        ]
      }
    })
    res.send(bet)
  } catch (error) {
    throw error
  }
}
const getAllBetsByUser = async (req, res) => {
  try {
    let userId = req.params.user_id
    let bet = await Bet.findAll({
      where: { user_id: userId },
      include: {
        model: Game,
        attributes: [
          'home_team',
          'home_ML',
          'home_spread',
          'away_team',
          'away_ML',
          'away_spread',
          'over',
          'under',
          'date',
          'id',
          'inProgress'
        ]
      }
    })
    res.send(bet)
  } catch (error) {
    throw error
  }
}

const getBetById = async (req, res) => {
  try {
    let bet = await Bet.findByPk(req.params.bet_id, {
      include: [
        { model: User, attributes: ['username'] },
        {
          model: Game,
          attributes: [
            'home_team',
            'home_ML',
            'home_spread',
            'away_team',
            'away_ML',
            'away_spread',
            'over',
            'under',
            'date',
            'id',
            'inProgress'
          ]
        }
      ]
    })
    res.send(bet)
  } catch (error) {
    throw error
  }
}

const updateBet = async (req, res) => {
  try {
    let bet = await Bet.update(
      { ...req.body },
      { where: { id: req.params.bet_id }, returning: true }
    )
    res.send(bet)
  } catch (error) {}
}

const deleteBet = async (req, res) => {
  try {
    await Bet.destroy({ where: { id: req.params.bet_id } })
    res.send({
      msg: 'Bet has been removed!'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createBet,
  getAllBetsByUser,
  getBetById,
  updateBet,
  deleteBet,
  getAllBets
}
