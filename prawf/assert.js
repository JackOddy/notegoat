// var chalk = require('chalk');

(function(exports) {

  function assert() {
  }

  assert.isTrue = function(testTitle, assertionToCheck) {
    if (!assertionToCheck) {
      console.log(('        ' + '👎  ' + testTitle + ' ❌'));
      return false;
    } else {
      console.log(('        ' + '🍓  ' + testTitle + ' ✅'));
      return true;
    }
  };

exports.assert = assert;
})(this);
