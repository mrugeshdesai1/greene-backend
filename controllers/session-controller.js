const knex = require('knex')(require('../knexfile'));


const startSession = async (req, res) => {

    const { userId } = req.body;
    const startTime = new Date();

    try {
        // Insert session record for the user and starttime
        await knex('sessions').insert({ user_id: userId, startTime:startTime , stopTime: null, duration: 0});
        res.status(200).send('Session started successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to start session');
    }

};

const stopSession = async (req, res) => {
    const { userId } = req.body;
    const stopTime = new Date();

    try {

        // find sessions corresponding to the user and sort the start time in descending order
        const session = await knex('sessions').where({ user_id: userId }).orderBy('startTime', 'desc').first();

        // if there is no session available, send the error response
        if (!session) {
          res.status(404).send('Session not found');
          return;
        }
    
        // Check if there is already a stop time
        if (session.stopTime) {
          res.status(400).send('Session already stopped');
          return;
        }

        // if there is not stop time recorded, enter the stop time and duration corresponding to that session
        const duration = Math.floor((stopTime - session.startTime)/60000);
        await knex('sessions').where({ sessionId: session.sessionId}).update({ stopTime:stopTime , duration:duration });
        res.status(200).json({ duration });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to stop session');
    }
};

module.exports = {
  startSession , stopSession
}