const router = require('express').Router();
const userController = require('../controllers/user-controller');

// Endpoint for User Registration
router.route('/register').post(userController.register);

// Endpoint for User Login
router.route('/login').post(userController.login);

module.exports = router;