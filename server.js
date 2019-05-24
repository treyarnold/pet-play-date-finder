const express = require("express");
const app = express();
const Pets = require("./models/pets");
const questions = require("./models/questions");

const PORT = process.env.PORT || 3000;

const pets = new Pets();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

pets.addPet("Jack", "https://images.unsplash.com/photo-1508814389023-fe39a089973a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80", [2, 3, 5, 1]);

app.get("/", (req, res) => {
  res.render("./index", { pets: pets });
});

app.get("/survey", (req, res) => {
  res.render("./survey", { questions: questions });
});

app.post("/API/pets", (req, res) => {
  const scores = [];
  Object.keys(req.body).forEach((key, value) => {
    if ((key !== "name") && (key !== "photo")) scores.push(parseInt(req.body[key]))
  });
  pets.addPet(req.body.name, req.body.photo, scores);
  const newFriend = pets.findFriend(req.body.name);
  res.render("./newfriend", { newFriend: newFriend });
})

app.get("/API/pets", (req, res) => {
  res.json(pets);
});

app.listen(PORT, function () {
  console.log("App listening on PORT : http://localhost:" + PORT);
});