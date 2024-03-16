const router = require('express').Router();
const protectedController = require('../controllers/user-controller');

// Endpoint for current user
router.route('/currentUser').get(protectedController.currentUser);

module.exports = router;