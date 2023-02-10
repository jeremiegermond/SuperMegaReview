// Server.js express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Start example
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(3001, () => console.log('Server running on localhost:3001'));