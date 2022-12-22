const router = require('express').Router()
const controller = require('../controllers/GameController')
const middleware = require('../middleware')

router.post('/', controller.createGame)
router.get('/', controller.getGames)
router.put('/', controller.updateAllGames)
router.put('/:game_id', controller.updateGame)
router.delete('/:game_id', controller.deleteGame)

module.exports = router
