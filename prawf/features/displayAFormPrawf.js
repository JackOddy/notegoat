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
      assert.isTrue(title, document.getElementById('addNote') !== null );
    });
    it('displays the submit button', function (title) {
      assert.isTrue(title, document.getElementById('submitNote') !== null )
    })
  });
});
