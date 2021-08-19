const express = require('express');
const controllers = require('../controllers/controller');
const router = express.Router()

// homePage render
router.get('/', controllers.homePage)

// contactForm render
router.post('/', controllers.contactForm)

module.exports = router