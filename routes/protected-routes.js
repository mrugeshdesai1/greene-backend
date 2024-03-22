const router = require('express').Router();
const protectedController = require('../controllers/user-controller');
const subscriptionController = require('../controllers/subscription-controller');
const sessionController = require('../controllers/session-controller');

// Endpoint for current user
router.route('/currentUser').get(protectedController.currentUser);

// Endpoint for subscribing the plan
router.route('/subscribe').post(subscriptionController.subscribe)

// Endpoint for getting the subscription details of the given user
router.route('/subscription/:id').get(subscriptionController.findSubscription)

// Endpoint for deleting the subscription of the given user
router.route('/subscription/:id').delete(subscriptionController.deleteSubscription)

// Endpoint for Starting of charging session
router.route('/start-session').post(sessionController.startSession)

// Endpoint for Starting of charging session
router.route('/stop-session').post(sessionController.stopSession)

module.exports = router;