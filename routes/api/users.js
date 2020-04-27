const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const spotifyController = require("../../controllers/spotifyController");
// Users routes
router.route("/users").post(usersController.create);
router.route("/spotify").post(spotifyController.create);
// usersController.create
module.exports = router;
