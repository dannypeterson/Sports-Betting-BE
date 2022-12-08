const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.post('/register', controller.register)

router.get('/', controller.getAllUsers)
router.get('/:user_id', controller.getUserById)

router.delete('/:user_id', controller.deleteUser)

module.exports = router
