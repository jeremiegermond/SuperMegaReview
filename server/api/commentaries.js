const express = require('express');
const router = express.Router();

const commentaries = require('./commentaries.json');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(typeof commentaries);
  console.log(commentaries);
  const commentary = commentaries["commentaries"].filter((commentary) => commentary.id === Number(id));
  res.json(commentary);
});

module.exports = router;
