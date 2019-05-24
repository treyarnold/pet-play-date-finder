const Pet = require("./pet");

const Pets = function () {
  this.allPets = [];

  this.addPet = function (name, photoURL, scores) {
    this.allPets.push (new Pet(name, photoURL, scores))
  }

  this.findFriend = function (name) {
    let newFriend;
    let rating;
    let difference = 1000;
    this.allPets.forEach(pet => {
      if (pet.name === name) rating = pet.rating
    });
    this.allPets.forEach(pet => {
      if ((Math.abs(pet.rating - rating) < difference) && (pet.name !== name)) {
        newFriend = pet;
        difference = Math.abs(pet.rating - rating);
      }
    });
    return newFriend
  }
}

module.exports = Pets;