const router = require('express').Router()
const controller = require('../controllers/BetController')
const middleware = require('../middleware')

router.post('/', controller.createBet)

router.get('/', controller.getAllBets)

module.exports = router
