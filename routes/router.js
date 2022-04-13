const express = require('express')
const app = express.Router()
const controller = require('../controller/controller')
const getAll = require('../controller/getusers')

app.get('/',getAll.get)

app.post('/signup',controller.signup)

module.exports = app