const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/societé");

const userSeed = [
  {
    first: "Joe",
    last: "Smith",
    password: "superSecure",
    email: "joe@class.com",
  },
];

db.Users.remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
