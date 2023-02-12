const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const commentaries = require('./commentaries.json');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(typeof commentaries);
  console.log(commentaries);
  const commentary = commentaries["commentaries"].filter((commentary) => commentary.id == Number(id));
  res.json(commentary);
});

router.post('/', (req, res) => {
  const commentary = req.body;
  // add uuid
  if (!commentary.author || !commentary.review) {
    res.status(400).json({ msg: 'Please include a author and review' });
    return;
  }
  commentary.uuid = uuidv4();
  commentaries["commentaries"].push(commentary);
  fs.writeFile('./api/commentaries.json', JSON.stringify(commentaries, null, 2)
    , (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json(commentary);
});

module.exports = router;
