const express = require('express');
const authRequired = require('../middleware/authRequired');
const customer = require('./appointmentsModel.js');
const router = express.Router()


