var subject;
var spacer = 0;


function describe(title, callback) {
  console.log((' '.repeat(spacer) + title + ' 🐐'));
  callback();
}

function it(title, callback) {
  // subject = new Subject(); - basically beforeEach functions here
  callback(title);
}

describe('noteGoat', function () {

  var note = new Note();


  describe('localStorage', function () {
    it('saves note to local storage', function (title) {
      note.save('this is my first note');
      note.save('this is my second note');
      note.save('this is my third note');
      note.save('this is my fourth note');
      note.save('this is my fifth note');
      assert.isTrue(title, JSON.parse(localStorage.getItem('allNotes')).length === 5);
    });
    it('retrieves a specific note', function(title){
      assert.isTrue(title, note.get(0) === 'this is my first note');
    });
  });


});
