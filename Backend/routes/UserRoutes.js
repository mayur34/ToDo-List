const express = require("express");

const UserControllers = require("../controllers/UserControllers");

//Adding express routes
const router = express.Router();

//User Route
router
  .route("/")
  .get(UserControllers.getAllUsers)
  .post(UserControllers.createUser);
router
  .route("/:id")
  .get(UserControllers.getUser)
  .patch(UserControllers.updateUser)
  .delete(UserControllers.deleteUser);

module.exports = router;
