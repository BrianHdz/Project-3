const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const account = require("../../controllers/account.js");
const spotifyController = require("../../controllers/spotifyController");
// Users routes
router.route("/users").post(usersController.create);
router.route("/users").get(usersController.findOne);
router.route("/users").get(account.logon);
router.route("/spotify").post(spotifyController.create);
// usersController.create
module.exports = router;
