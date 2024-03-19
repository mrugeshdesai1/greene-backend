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


module.exports = {
  subscribe
}