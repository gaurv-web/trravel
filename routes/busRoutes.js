const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController.js');

// Search buses
router.post('/search', busController.searchBuses);

module.exports = router;
