var view = (function () {


  return {
    renderAll: function (allNotes) {
      var notes = '';
        allNotes.forEach( function(note, index) {
          notes += "<a id='" + index +"' href='#" + index + "'><p>"+ note.substring(0, 20)+"...</p></a>";
        });
        o('notes').innerHTML =  notes;
    },
    renderFocus: function (note) {
      o('focusNote').innerHTML = note;
    }
  };
})();
