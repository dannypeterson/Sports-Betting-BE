const router = require('express').Router()
const controller = require('../controllers/GameController')
const middleware = require('../middleware')

router.post('/', controller.createGame)
router.get('/', controller.getGames)

module.exports = router
