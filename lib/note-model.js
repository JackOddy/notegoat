(function(exports) {

  function Note(content) {
    this.content = content;
    this.allNotes = [];
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
    }
  };

exports.Note = Note;
})(this);
