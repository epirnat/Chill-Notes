const notes = [{
  title: 'Trip ideas',
  body: 'Kamnik > Pariz'
}, {
  title: 'Books to read',
  body: 'Deep Work by Cal Newport'
}, {
  title: 'For later',
  body: 'Look up cool bird facts'
}];

// function that sorts notes by alphabetical order
const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

// function that finds a specific note via note title
const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const note = findNote(notes, 'trip ideas');
// console.log(note);

// function that finds a note just by querying part of the title

const findNotes = function(notes, query) {
  return notes.filter(function (note, index) {
  const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
  const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
  return isTitleMatch || isBodyMatch;
  })
}

sortNotes(notes);
console.log(notes)

// console.log(findNotes(notes,'to'));