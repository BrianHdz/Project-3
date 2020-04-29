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

    
    findOne: function (req, res) {
        let credentials = JSON.parse(req.query.query)
        let email = credentials.email
        let password = credentials.password

        console.log(credentials.email)

        db.Users
            .findOne(
                { email: email }
                
            ).then(
                function (err, passwordHash) {
                if (passwordHash == user.passwordHash) {
                    console.log("user was found")
                    var userProfileModel = new me.UserProfileModel({
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    });
                    me.session.userProfileModel = userProfileModel;
                    // take this off for final product
                //     return callback(err, alert("Correct email & password  :)"));
                 } 
                 else {
                     res.send(err)
                //     return callback(err, alert("Oops, invalid password!"));
                 }
            });
    },

}
