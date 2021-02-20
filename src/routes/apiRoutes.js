const express = require('express');
const mockDataController = require('../controllers/randomMockData.controller')

const router = express.Router();

router.route('/generateRandomData').get(mockDataController.generateRandomMockData);
router.route('/randommockdata').post(mockDataController.generateMockDataWithInput);

module.exports = router