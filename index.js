const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const passport = require("./middleware/authentication/index");

// Enable CORS to allow cross origin request
const cors = require("cors");
app.use(cors());
// This middleware allows us to post JSON in request.body
app.use(morgan("dev"));
app.use(express.json());

const stationRoutes = require('./routes/station-routes');
const userRoutes = require('./routes/user-routes');
const protectedRoutes = require('./routes/protected-routes')

// all charging station routes
app.use('/charging-stations', stationRoutes);

// all user routes routes
app.use('/', userRoutes);

app.use(
  passport.authenticate("jwt", {
    session: false,
  })
);

// all user protected routes routes
app.use('/', protectedRoutes);

app.get("/protected", (req, res) => {
  res.json({ user: req.user });
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});