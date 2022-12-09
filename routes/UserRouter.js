const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.post('/register', controller.register)
router.post('/login', controller.login)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.checkSession
)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.checkSession
)

router.get('/', controller.getAllUsers)
router.get(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUserById
)

router.delete('/:user_id', controller.deleteUser)

module.exports = router
