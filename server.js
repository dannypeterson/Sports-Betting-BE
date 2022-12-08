const express = require('express')
const cors = require('cors')
const logger = require('morgan')
// import routers here

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ msg: `Server Works!` }))

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
