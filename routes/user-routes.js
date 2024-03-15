const router = require('express').Router();
const userController = require('../controllers/user-controller');


function authorize(req, res, next) {
    // STEP 2: Logic for getting the token and
    // decoding the contents of the token. The
    // decoded contents should be placed on req.decoded
    // If the token is not provided, or invalid, then
    // this function should not continue on to the
    // end-point and respond with an error status code.
  
    if (!req.headers.authorization) {
      return res.status(401).send("Auth token required");
    }
    const token = req.headers.authorization.split(" ")[1];
  
    jwt.verify(token, 'secretKey', (err,decoded) => {
      if (err) {
        res.status(403).json({success:false,
                              message: 'No token'});
      } else {
        //res.send("Protected Info");
        req.decoded =decoded;
        next();
      }
    });
}

// Endpoint for User Registration
router.route('/register').post(userController.register);

// Endpoint for User Login
router.route('/login').post(userController.login);

// end-point that will return user information
router.route('/profile').get(authorize,userController.profile);

module.exports = router;