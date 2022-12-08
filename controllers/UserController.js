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

module.exports = {
  register
}
