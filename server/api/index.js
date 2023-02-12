const express = require('express');
const router = express.Router();

const commentaries = require('./commentaries');

router.use('/commentaries', commentaries);

module.exports = router;