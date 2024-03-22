const knex = require('knex')(require('../../knexfile'));
const passport = require("passport"),
JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt;
require('dotenv').config;

// JWT Strategy
// check if the JWT exist and if it is extract the token
let jwtOptions = {
    jwtFromRequest: (req) => {
      return (
        ExtractJwt.fromAuthHeaderWithScheme("Bearer")(req)
      );
    },
    secretOrKey: `${process.env.TOKEN}`,
};

//from the extracted JWT payload, check if it is expired or not
//If the JWT is not expired, find the user corresponding to the user id and send the response as userData. 
passport.use(
    "jwt",
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
      if (Date.now() > jwtPayload.expires) {
        return done(null, false, { message: "jwt expired" });
      }
      let { iat, exp, ...userData } = jwtPayload;
      userData = await knex('Users').where({userId: userData.userId}).first();
      if (!userData) {
        return done(null, false, { message: "user not found" });
      }
      
      userData = 
        {
            userId: userData.userId,
            firstName: userData.firstName,
            lastName: userData.lastName,
            username: userData.username,
            email: userData.email
        };
  
      return done(null, userData);
    })
  );
  
  module.exports = passport;