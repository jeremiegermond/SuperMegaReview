// Server.js express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Start example
app.use(bodyParser.json());

const api = require('./api');

app.use('/api', api);

app.listen(3001, () => console.log('Server running on http://localhost:3001'));