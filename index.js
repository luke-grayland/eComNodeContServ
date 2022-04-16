const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./Config/routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

routes(app)
module.exports = app
