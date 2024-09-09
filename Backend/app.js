const express = require("express");
const app = express();
const morgan = require("morgan");
const TaskRoutes = require("./routes/TaskRoutes");
const UserRoutes = require("./routes/UserRoutes");

const port = 4000;

//Middleware
app.use(morgan("dev"));

app.use(express.json());

//Implemented local MiddleWare for practice
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Functions

/*--------User controller--------*/

// app.get("/api/v1/task", getAllTask);

// app.get("/api/v1/task/:id", getTask);

// app.post("/api/v1/task", createTask);

// app.patch("/api/v1/task/:id", updateTask);

// app.delete("/api/v1/task/:id", deleteTask);

//Routes

//Adding express routes
// const TaskRoutes = express.Router();
// const UserRoutes = express.Router();

// //Task Route
// TaskRoutes.route("/").get(getAllTask).post(createTask);
// TaskRoutes.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// //User Route
// UserRoutes.route("/").get(getAllUsers).post(createUser);
// UserRoutes.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

//(Mounting routes via middleware)
//first as it sees this url /api/v1/task it will run TaskRoutes middleware ,as TaskRoutes is also a middleware
app.use("/api/v1/task", TaskRoutes);
app.use("/api/v1/user", UserRoutes);

module.exports = app;
