const router = require('express').Router()
const controller = require('../controllers/GameController')
const middleware = require('../middleware')

router.post('/', controller.createGame)
router.get('/', controller.getGames)
router.put('/:game_id', controller.updateGame)

module.exports = router
