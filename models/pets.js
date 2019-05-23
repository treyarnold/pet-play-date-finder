const Pet = require("./pet");

const Pets = function () {
  this.allPets = [];

  this.addPet = function (name, photoURL, scores) {
    this.allPets.push (new Pet(name, photoURL, scores))
  }
}

module.exports = Pets;