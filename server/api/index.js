const express = require('express');
const router = express.Router();

const commentaries = require('./commentaries');
const users = require('./users');

router.use('/commentaries', commentaries);
router.use('/users', users);

module.exports = router;