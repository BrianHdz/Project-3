const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Users routes
router.route("/users").post(usersController.create);

// usersController.create
module.exports = router;
