const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const jwt = require('jsonwebtoken');

// Enable CORS to allow cross origin request
const cors = require("cors");
app.use(cors());
// This middleware allows us to post JSON in request.body
app.use(express.json());

const stationRoutes = require('./routes/station-routes');

const userRoutes = require('./routes/user-routes');

// all charging station routes
app.use('/charging-stations', stationRoutes);

// all charging station routes
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});