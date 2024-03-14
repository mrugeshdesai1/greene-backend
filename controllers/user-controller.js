const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config;

const register = async (req, res) => {

    // get the username, email and password as a part register request
    const { username, email, password } = req.body;
    
    // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  knex('Users')
    .insert({username,email,password:hashedPassword})
    .then((data) => {
      res.status(200).json({ message: 'User registered successfully' });
    })
    .catch((err) =>
      res.status(500).send({ message: 'Internal server error' })
    );
};

const login = async (req, res) => {

    // get the username, email and password as a part login request
    const { username,password } = req.body;
    
    try {
        // Retrieve user from the database based on the email and 
        const user = await knex('Users').where({username}).first();
    
        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Validate password
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Create JWT token with user's username as payload
        const token = jwt.sign({ username:user.username }, `${process.env.TOKEN}`);

        res.json({ token:token });

    } catch(err) {
        res.status(403).send({token:null})
    }

};

const profile = async (req, res) => {

    console.log(req.decoded);
    res.json(req.decoded);

};


module.exports = {
  register , login , profile
}