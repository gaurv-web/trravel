const express = require('express');
const router = express.Router();
const flightController = require('../controllers/fligthController.js');

// Search flights by query
router.post('/search', flightController.searchFlights);

module.exports = router;
