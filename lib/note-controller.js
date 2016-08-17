function o (id) {
  return document.getElementById(id);
}

function getNoteIndexFromUrl (callback) {
  callback(location.hash.split('#')[1]);
}

o('addNote').addEventListener('click', function() {
  note.save( o('noteContent').value );
  o('noteContent').value = '';
});

o('addNote').addEventListener('click', function() {
  view.renderAll( note.getAll() );
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

o('delete').addEventListener('click', function () {
  note.deleteAll();
  location.reload();
});
