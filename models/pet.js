const Pet = function (name, photoURL, scores) {
  this.name = name;
  this.photoURL = photoURL;
  this.scores = scores;
  this.rating = scores.reduce((total, num) => { return total + num });
}

module.exports = Pet;