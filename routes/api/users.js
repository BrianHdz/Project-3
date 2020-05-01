const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const spotifyController = require("../../controllers/spotifyController");


// Users routes


router.route("/users").post(usersController.create);


// Spotify Routes
router.route("/spotify")
.post(spotifyController.create)
.get(spotifyController.findAllSpotifyPlaylist);

router
.route("/spotify/:id")
.delete(spotifyController.removeSpotifyPlaylist)

module.exports = router;
