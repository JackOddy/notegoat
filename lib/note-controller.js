function o (id) {
  return document.getElementById(id);
}

function getNoteIndexFromUrl (callback) {
  callback(location.hash.split('#')[1]);
}

document.getElementById('addNote').addEventListener('click', function() {
  note.save( document.getElementById('noteContent').value );
  document.getElementById('noteContent').value = '';
});

document.getElementById('addNote').addEventListener('click', function() {
  note.getAll(function (notes) {
    view.renderAll(notes);
  });
});


window.addEventListener('hashchange', function() {
  getNoteIndexFromUrl( function (index) {
    note.get(index, function (note) {
      view.renderFocus(note);
    });
  });
});

window.addEventListener('load', function () {
  view.renderAll( note.getAll() );
  if ( location.hash !== "" ) {
    getNoteIndexFromUrl( function (index) {
      note.get(index, function (note) {
        view.renderFocus(note);
      });
    });
  }
});

document.getElementById('delete').addEventListener('click', function () {
  note.deleteAll();
  location.reload();
});
