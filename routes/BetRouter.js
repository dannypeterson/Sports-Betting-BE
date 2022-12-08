const router = require('express').Router()
const controller = require('../controllers/BetController')
const middleware = require('../middleware')

router.post('/', controller.createBet)

router.get('/', controller.getAllBets)
router.get('/:bet_id', controller.getBetById)

router.put('/:bet_id', controller.updateBet)

router.delete('/:bet_id', controller.deleteBet)

module.exports = router
