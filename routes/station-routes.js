const router = require('express').Router();
const stationController = require('../controllers/station-controller');

router.route('/').get(stationController.chargingStations);

module.exports = router;