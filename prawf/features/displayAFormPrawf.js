// var assert = require('./assert');
// var chalk = require('chalk');


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
  describe('form', function () {
    it('displays the form', function (title) {
      assert.isTrue(title, document.getElementById('noteContent') !== null );
    });
    it('displays the submit button', function (title) {
      assert.isTrue(title, document.getElementById('addNote') !== null );
    });
    it('lists a note', function (title) {
      document.getElementById('noteContent').value = 'this is a note';
      document.getElementById('addNote').click();
      assert.isTrue(title, document.getElementById('notes').textContent.indexOf('this is a note') !== -1 );
    });
    it('displays a note', function (title) {
      document.getElementById('0').click();
      window.setTimeout( function (){assert.isTrue(title, document.getElementById('focusNote').textContent.indexOf('this is a note') !== -1 )}, 500);
    });
  });
});
