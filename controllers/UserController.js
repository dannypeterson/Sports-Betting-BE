const { User } = require('../models')
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
    let user = await User.findByPk(req.params.user_id)
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
  deleteUser
}
