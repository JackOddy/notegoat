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
      this.post = function(aUrl, note, aCallback) {
          var httpRequest = new XMLHttpRequest();
          httpRequest.onreadystatechange = function() {
              if (httpRequest.readyState == 4 && httpRequest.status == 200)
                  aCallback(httpRequest.responseText);
          };

          httpRequest.open( "POST", aUrl, true );
          httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          httpRequest.send( "content=" + note );
      };
  };

  var lorry = [];
  var http = new HttpClient();

  return {
    save: function(note){
      http.post('http://localhost:4567/notes', note, function() {
      });
    },

    get: function(id, callback){
      http.get('http://localhost:4567/notes/' + id, function(response) {
        lorry = JSON.parse(response);
        // console.log(response);
        callback( lorry );
      });
    },

    getAll: function() {
       http.get('http://localhost:4567/notes', function(response) {
        console.log(JSON.parse(response));
        view.renderAll(JSON.parse(response));
      });
    },

  };
})();
