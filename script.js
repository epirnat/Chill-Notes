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

const filters = {
  searchText: ''
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    document.querySelector('div').appendChild(noteEl);
  })
};

renderNotes(notes, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})