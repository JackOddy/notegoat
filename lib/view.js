var view = (function () {


  return {
    renderAll: function (allNotes) {
      console.log(allNotes);
      var notes = '';
        allNotes.forEach( function(note) {
          notes += "<a id='" + note.id +"' href='#" + note.id + "'><p>"+ note.content.substring(0, 20)+"...</p></a>";
        });
        document.getElementById('notes').innerHTML =  notes;
    },
    renderFocus: function (note) {
      document.getElementById('focusNote').innerHTML = note.content;
    }
  };
})();
