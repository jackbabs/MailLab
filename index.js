const express = require('express')
const mongoose = require('mongoose')
require('./models/User')
require('./services/passport')


mongoose.connect('mongodb://localhost:27017/maillab-dev')

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)