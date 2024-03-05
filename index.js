const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// basic home route
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});