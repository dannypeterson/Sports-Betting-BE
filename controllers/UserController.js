const { User, Bet, Game } = require('../models')
const middleware = require('../middleware')

const register = async (req, res) => {
  try {
    let { username, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ username, email, passwordDigest })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        balance: user.balance
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const getAllUsers = async (req, res) => {
  try {
    let user = await User.findAll()
    res.send(user)
  } catch (error) {
    throw error
  }
}

const getUserById = async (req, res) => {
  try {
    let user = await User.findByPk(req.params.user_id, {
      include: [
        { model: Bet, attributes: ['game_id', 'type', 'amount', 'payout'] }
      ]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
    res.send({ msg: 'User Deleted!' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  register,
  getAllUsers,
  getUserById,
  deleteUser,
  login,
  checkSession
}
