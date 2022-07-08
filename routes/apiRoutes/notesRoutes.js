const router = require('express').Router();
const { createNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
    if(notes){
        req.body.id = notes.length.toString();
    } else {req.body.id = 0}
  const note = createNote(req.body, notes);
  res.json(note);
  });

module.exports = router;