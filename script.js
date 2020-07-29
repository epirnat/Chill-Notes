const notes = [ {
  title: 'Trip ideas',
  body: 'Go to Bled'
}, {
  title: 'Books to read',
  body: 'Deep Work by Cal Newport'
}, {
  title: 'For later',
  body: 'Look up cool bird facts'
}];

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const note = findNote(notes, 'trip ideas');
console.log(note);