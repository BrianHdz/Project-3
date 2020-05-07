const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const account = require("../../controllers/account.js");
const spotifyController = require("../../controllers/spotifyController");
const youtubeController = require("../../controllers/youtubeController");

// Users routes

router.route("/users").post(usersController.create);
router.route("/users").get(usersController.findOne);

// Spotify Routes
router
  .route("/spotify")
  .post(spotifyController.create)
  .get(spotifyController.findAllSpotifyPlaylist);

router.route("/spotify/:id").delete(spotifyController.removeSpotifyPlaylist);

// Youtube routes
router
  .route("/youtube")
  .post(youtubeController.create)
  .get(youtubeController.findAllYoutubeVideos);

router.route("/youtube/:id").delete(youtubeController.removeYoutubeVideo);

module.exports = router;
