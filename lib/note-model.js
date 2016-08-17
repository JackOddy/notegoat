var note = (function() {

  var lorry = [];

  return {
    save: function(note){
      if ( JSON.parse( localStorage.getItem('allNotes') ) !== null ) {
        lorry = JSON.parse( localStorage.getItem('allNotes') );
      }
      lorry.push(note);
      localStorage.setItem('allNotes', JSON.stringify( lorry ) );
    },
    get: function(id, callback){
      lorry = JSON.parse( localStorage.getItem('allNotes') )[id];
      callback( lorry );
    },
    getAll: function() {
      return JSON.parse(localStorage.getItem('allNotes'));
    },
    deleteAll: function () {
      localStorage.removeItem('allNotes');
    }
  };
})();
