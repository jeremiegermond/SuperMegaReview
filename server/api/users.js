// users.js
const express = require('express');
const router = express.Router();
const fs = require('fs');


const users = require('./users.json');

router.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const user = users["users"].filter((user) => user.username === username && user.password === password);
  res.json(user);
});

router.post('/register', (req, res) => {
  const user = req.body;
  users["users"].push(user);
  fs.writeFile('./api/users.json', JSON.stringify(users), (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json(user);
});

module.exports = router;