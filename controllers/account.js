const UserProfileModel = require('../models/user-profile.js');
const crypto = require('crypto');
// const uuid = require('node-uuid');
// const session = session;
// const mailer = mailer;

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
        console.log(email, password, me)
        me.userModel.findOne({ email: email }, function (err, user) {
            if (err) {
                return callback(err, alert("Wrong Username &/or Password"));
            }
            if (user) {
                me.hashPassword(password, user.passwordSalt, function (err, passwordHash) {
                    if (passwordHash == user.passwordHash) {
                        var userProfileModel = new me.UserProfileModel({
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName
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
    }




    // //Register Method
    // AccountController.prototype.register = function (newUser, callback) {
    //     var me = this;
    //     me.userModel.findOne({ email: newUser.email }, function (err, user) {
    //         if (err) {
    //             return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.DB_ERROR } }));
    //         }
    //         if (user) {
    //             return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.EMAIL_ALREADY_EXISTS } }));
    //         } else {
    //             newUser.save(function (err, user, numberAffected) {
    //                 if (err) {
    //                     return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.DB_ERROR } }));
    //                 }
    //                 if (numberAffected === 1) {
    //                     var userProfileModel = new me.UserProfileModel({
    //                         email: user.email,
    //                         firstName: user.firstName,
    //                         lastName: user.lastName
    //                     });
    //                     return callback(err, new me.ApiResponse({
    //                         success: true, extras: {
    //                             userProfileModel: userProfileModel
    //                         }
    //                     }));
    //                 } else {
    //                     return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.COULD_NOT_CREATE_USER } }));
    //                 }             
    //             });
    //         }
    //     });
    // };



};