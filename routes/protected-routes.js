const router = require('express').Router();
const protectedController = require('../controllers/user-controller');
const subscriptionController = require('../controllers/subscription-controller');

// Endpoint for current user
router.route('/currentUser').get(protectedController.currentUser);

// Endpoint for subscribing the plan
router.route('/subscribe').post(subscriptionController.subscribe)

module.exports = router;