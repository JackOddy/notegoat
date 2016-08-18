var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

var allNotes = [];

  var testObject = { 'content': 'This is the first note on noteGoat.' };
  var testObjectTwo = { 'content': 'This is the second note on noteGoat' };

allNotes.push(testObject);
allNotes.push(testObjectTwo);

console.log(allNotes);

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('allNotes', JSON.stringify(allNotes));

console.log(localStorage.length);
console.log(localStorage);

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('allNotes');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

retrievedAllNotes = JSON.parse(retrievedObject);

console.log(retrievedAllNotes);
console.log(retrievedAllNotes[0]['content']);


// Storage.prototype.setObject = function(key, value) {
//     this.setItem(key, JSON.stringify(value));
// };
//
// Storage.prototype.getObject = function(key) {
//     var value = this.getItem(key);
//     return value && JSON.parse(value);
// };
