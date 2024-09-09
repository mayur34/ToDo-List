const express = require("express");

const TaskControllers = require("../controllers/TaskControllers");

//Adding express routes
const router = express.Router();

//this is middleware param ,we can get val as param in here as id
router.param("id", TaskControllers.CheckIDForParamMiddleware);

//Task Route
router
  .route("/")
  .get(TaskControllers.getAllTask)
  //writing middleware (TaskControllers.checkBody) for post to check the req.body is empty or not
  .post(TaskControllers.checkBody, TaskControllers.createTask);
router
  .route("/:id")
  .get(TaskControllers.getTask)
  .patch(TaskControllers.updateTask)
  .delete(TaskControllers.deleteTask);

module.exports = router;
