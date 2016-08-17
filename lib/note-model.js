var note = (function(exports) {

  function Note(content) {
    this.content = content;
    if (this.getAll() === null) {
      this.allNotes = [];
    } else {
      this.allNotes = this.getAll();
    }
  }

  Note.prototype = {
    getContent: function() {
      return this.content;
    },

    save: function(note){
      this.allNotes.push(note);
      localStorage.setItem('allNotes', JSON.stringify(this.allNotes));
    },

    get: function(id){
      return JSON.parse(localStorage.getItem('allNotes'))[id];
    },
    getAll: function() {
      return JSON.parse(localStorage.getItem('allNotes'));
    },
    deleteAll: function () {
      localStorage.removeItem('allNotes');
      this.allNotes = [];
    }
  };

exports.Note = Note;
})(this);
