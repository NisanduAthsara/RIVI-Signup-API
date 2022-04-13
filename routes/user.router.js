const express = require('express')
const app = express.Router()
const controller = require('../controller/signup.controller')
const getAll = require('../controller/getusers.controller')

app.get('/',getAll.get)

app.post('/signup',controller.signup)

module.exports = app