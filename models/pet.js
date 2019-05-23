//const uuidv5 = require('uuid/v5');

const Pet = function (name, photoURL, scores) {
  this.name = name;
  this.photoURL = photoURL;
  this.scores = scores;
}

module.exports = Pet;