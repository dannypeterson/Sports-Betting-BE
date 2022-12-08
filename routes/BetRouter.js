const router = require('express').Router()
const controller = require('../controllers/BetController')
const middleware = require('../middleware')

router.post('/', controller.createBet)

router.get('/', controller.getAllBets)
router.get('/:bet_id', controller.getBetById)

module.exports = router
