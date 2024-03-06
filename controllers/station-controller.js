const knex = require('knex')(require('../knexfile'));

const chargingStations = (_req, res) => {
  knex('charging_station')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Users: ${err}`)
    );
};

module.exports = {
    chargingStations
}