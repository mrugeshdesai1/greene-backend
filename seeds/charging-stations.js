const stationsData = require('../seed-data/stations');

exports.seed = function (knex) {
  return knex('charging_station')
    .del()
    .then(function () {
      return knex('charging_station').insert(stationsData);
    });
};