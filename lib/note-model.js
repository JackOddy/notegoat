var note = (function() {

  var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
          var httpRequest = new XMLHttpRequest();
          httpRequest.onreadystatechange = function() {
              if (httpRequest.readyState == 4 && httpRequest.status == 200)
                  aCallback(httpRequest.responseText);
          };

          httpRequest.open( "GET", aUrl, true );
          httpRequest.send( null );
      };
      this.post = function(aUrl, aCallback) {
          var httpRequest = new XMLHttpRequest();
          httpRequest.onreadystatechange = function() {
              if (httpRequest.readyState == 4 && httpRequest.status == 200)
                  aCallback(httpRequest.responseText);
          };

          httpRequest.open( "POST", aUrl, true );
          // httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          httpRequest.send( null );
      };
  };

  var lorry = [];
  var http = new HttpClient();

  return {
    save: function(note){
      if ( JSON.parse( getAll() ) !== null ) {
        lorry = JSON.parse( getAll() );
      }
      http.post('http://localhost:4567/notes?content=' + note, function(response) {
        return response;
      });
      //
      // lorry.push(note);
      // localStorage.setItem('allNotes', JSON.stringify( lorry ) );
    },

    get: function(id, callback){
      http.get('http://localhost:4567/notes/:' + id, function(response) {
        lorry = JSON.parse(resposnse);
        callback( lorry );
      });
      // lorry = JSON.parse( localStorage.getItem('allNotes') )[id];
      // callback( lorry );
    },

    getAll: function() {
      http.get('http://localhost:4567/notes', function(response) {
        return JSON.parse(resposnse);
      });
    },

    deleteAll: function () {
      localStorage.removeItem('allNotes');
    }
  };
})();
