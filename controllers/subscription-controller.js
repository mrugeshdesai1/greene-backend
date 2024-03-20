const knex = require('knex')(require('../knexfile'));


const subscribe = async (req, res) => {

    const { userId, plan } = req.body;
    console.log(req.body)

    try {
        // Check if the user is already subscribed
        const existingSubscription = await knex('subscriptions').where('user_id', userId).first();
    
        // If already subscribed, delete the existing subscription
        if (existingSubscription) {
            await knex('subscriptions').where('user_id', userId).del();
        }   
          
        // Create a new subscription
        await knex('subscriptions').insert({ user_id: userId, planName: plan });
        res.status(200).json({ message: 'Subscription successful' });

    } catch(err) {
        res.status(500).json({ error: 'Internal server error' });
    }

};

const findSubscription = (req, res) => {
    knex("subscriptions")
      .where({ user_id: req.params.id })
      .then((usersFound) => {
  
        if (usersFound.length === 0) {
          return res
            .status(404)
            .json({ message: `Subscription details not found` });
        }
  
        const userData = usersFound[0];
  
        res.status(200).json(userData);
      })
      .catch(() => {
        res.status(500).json({
          message: `Unable to retrieve user data for user}`,
        });
      });
  }

module.exports = {
  subscribe , findSubscription
}