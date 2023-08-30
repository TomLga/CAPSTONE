// settig routes 
const express = require('express')
const bodyParser = require('body-parser')
const setRoute = express.Router()
const {user, products} = require('../model')
const verifyAToken = require('../middleware/authication')
const app = express()