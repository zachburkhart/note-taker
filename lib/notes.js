const fs = require('fs');
const path = require('path');

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ db: notesArray }, null, 2)
    );
    return note;
  }

module.exports = {
    createNote,
  };