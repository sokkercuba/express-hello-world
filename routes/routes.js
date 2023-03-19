const router = require("express").Router();
const userController = require("../controllers/users");
const dbController = require("../controllers/collections");

// Create or Update a collection
router.route("/:col/:key").post(dbController.setCollection);

// Delete a collection
router.route("/:col/:key").delete(dbController.deleteCollection);

// Get a single collection
router.route("/:col/:key").get(dbController.getCollection);

// Get a full listing of collections
router.route("/:col").get(dbController.getCollections);

// Handle external authentication
router.route("/login").post(userController.handleLogin);

// Handle Logout
router.route("/logout").get(userController.handleLogOut);

// Get current user data
router.route("/current").get(userController.getUser);

module.exports = router;
