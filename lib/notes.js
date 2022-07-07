const fs = require('fs');
const path = require('path');

function createNote(body, notes_array) {
    const note = body;
    notes_array.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes_array }, null, 2)
    );
    return animal;
  }

module.exports = {
    createNote,
  };