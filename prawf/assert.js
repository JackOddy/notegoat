var chalk = require('chalk');

function assert() {
}

assert.isTrue = function(testTitle, assertionToCheck) {
  if (!assertionToCheck) {
    console.log(chalk.red('        ' + '👎  ' + testTitle + ' ❌'));
    return false;
  } else {
    console.log(chalk.green('        ' + '🍓  ' + testTitle + ' ✅'));
    return true;
  }
};

module.exports = assert;
