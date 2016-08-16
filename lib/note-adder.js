var note = new Note();

document.getElementById('addNote').addEventListener('click', function() {
  var content = document.getElementById('noteContent').value;
  note.save(content);
  document.getElementById('noteContent').value = ''
});
document.getElementById('addNote').addEventListener('click', function() {
  var notes = "";
  note.getAll().forEach(function(note, index) {
    notes = notes + "<a href='#" + index + "'><p>"+ note.substring(0, 20)+"...</p></a>";
  });
  document.getElementById('notes').innerHTML = notes;
});
window.addEventListener('hashchange', showNoteOnPage);

function getNoteIndexFromUrl () {
  return location.hash.split('#')[1];
}

function showNoteOnPage () {
  document.getElementById('focusNote').innerHTML = note.get(getNoteIndexFromUrl());
}