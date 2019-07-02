const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/Mongoose-Movies", {
  useNewUrlParser: true
});

const celebrities = [
  {
    name: "Whoopie Whoop",
    occupation: "actor",
    catchPhrase: "An actress can only play a woman. I am an actor, I can play anything."
  },
  {
    name: "Fabi Quatschkopf",
    occupation: "comedian",
    catchPhrase: "Ich kann's einfach nicht von der Technik her - Was, Fabi? Du schwimmst wie ein Teddybär?"
  },
  {
    name: "Ana Banana",
    occupation: "singer",
    catchPhrase: "Positive thinking will let you do everything better than negative thinking will."
  }
]

Celebrity.insertMany(celebrities)
  .then( (celebrities) => {
    console.log("You made it! The celebrities are in your database!", celebrities);
    mongoose.connection.close();
  })
    .catch(err => {console.log(err)
  })