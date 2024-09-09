const express = require("express");

const TaskControllers = require("../controllers/TaskControllers");

//Adding express routes
const router = express.Router();

//Task Route
router
  .route("/")
  .get(TaskControllers.getAllTask)
  .post(TaskControllers.createTask);
router
  .route("/:id")
  .get(TaskControllers.getTask)
  .patch(TaskControllers.updateTask)
  .delete(TaskControllers.deleteTask);

module.exports = router;
