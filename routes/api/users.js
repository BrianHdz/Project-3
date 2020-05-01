const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const account = require("../../controllers/account.js");
const spotifyController = require("../../controllers/spotifyController");


// Users routes


router.route("/users").post(usersController.create);
router.route("/users").get(usersController.findOne);
// router.route("/users").get(account.logon);
// usersController.create


// Spotify Routes
router.route("/spotify")
.post(spotifyController.create)
.get(spotifyController.findAllSpotifyPlaylist);

router
.route("/spotify/:id")
.delete(spotifyController.removeSpotifyPlaylist)





module.exports = router;
