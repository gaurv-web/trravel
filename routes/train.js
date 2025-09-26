const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController.js');

router.post('/search', trainController.searchTrains);

module.exports = router;
