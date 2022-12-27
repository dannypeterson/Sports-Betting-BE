const express = require('express')
const cors = require('cors')
const logger = require('morgan')
// import routers here
const UserRouter = require('./routes/UserRouter')
const GameRouter = require('./routes/GameRouter')
const BetRouter = require('./routes/BetRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ msg: `Server Works!` }))
app.use('/users', UserRouter)
app.use('/games', GameRouter)
app.use('/bets', BetRouter)

// app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
app.listen(`0.0.0.0:${PORT}`, () =>
  console.log(`Server Running On Port: ${PORT}`)
)
