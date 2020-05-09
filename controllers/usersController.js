const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    db.Users.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // Hashword Method
  hashPassword: function (password, salt, callback) {
    // we use pbkdf2 to hash and iterate 10k times by default
    var iterations = 10000,
      keyLen = 64; // 64 bit.
    this.crypto.pbkdf2(password, salt, iterations, keyLen, callback);
  },

  // req requesting/getting data from the front end axios call.
  // res sends/posts data from the back end to the front end with the axios call.
  findOne: function (req, res) {
    let credentials = JSON.parse(req.query.query);
    let email = credentials.email;
    let password = credentials.password;

    console.log(
      credentials.password + " ...........From userController.js line 27"
    );

    db.Users.findOne(
      // Find a matching user in database
      { email: email },
      function (err, user) {
        if (err) {
          return alert("Wrong Username &/or Password");
        }
      }
    ).then((user) => {
      console.log(user);
      if (user) {
        // Validating Password and console.log status on the backend
        if (user.password === password) {
          res.send("Log in successfull");
        } else {
          res.send("Incorrect password");
        }
      } else {
        res.send("User does not exist");
      }
    });
  },
};
