const UserProfileModel = require("../models/user-profile.js");
const crypto = require("crypto");
const db = require("../models");

module.exports = {
  // Getter and setter methods
  getSession: function () {
    return this.session;
  },

  setSession: function (session) {
    this.session = session;
  },

  // Hashword Method
  hashPassword: function (password, salt, callback) {
    // we use pbkdf2 to hash and iterate 10k times by default
    var iterations = 10000,
      keyLen = 64; // 64 bit.
    this.crypto.pbkdf2(password, salt, iterations, keyLen, callback);
  },

  // Login Methods
  logon: function (email, password, callback) {
    var me = this;
    console.log(email, password, me);
    me.userModel.findOne({ email: email }, function (err, user) {
      if (err) {
        return callback(err, alert("Wrong Username &/or Password"));
      }
      if (user) {
        console.log(user + "....................from account.js");
        me.hashPassword(password, user.passwordSalt, function (
          err,
          passwordHash
        ) {
          if (passwordHash == user.passwordHash) {
            var userProfileModel = new me.UserProfileModel({
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
            });
            me.session.userProfileModel = userProfileModel;
            // take this off for final product
            return callback(err, alert("Correct email & password  :)"));
          } else {
            return callback(err, alert("Oops, invalid password!"));
          }
        });
      } else {
        return callback(err, alert("Email not found   :("));
      }
    });
  },

  // Logout method
  logoff: function () {
    if (this.session.userProfileModel) delete this.session.userProfileModel;
    return;
  },
};
