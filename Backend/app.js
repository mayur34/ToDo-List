const express = require("express");
const app = express();
const morgan = require("morgan");

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
const getAllTask = (req, res) => {
  res.status(200).json({
    requesAt: req.requestTime,
    status: "success",
    data: "temp",
  });
};

const createTask = (req, res) => {
  console.log(req.body);
  //Send Id

  res.send("Done");
};

const updateTask = (req, res) => {
  console.log(req.body);
  //will update a specific property
  res.send("Done");
};

const deleteTask = (req, res) => {
  // console.log(req.body);
  //will update a specific property
  res.status(204).json({
    status: "success",
    data: null,
  });
};

const getTask = (req, res) => {
  console.log(req.body.id);
  //will update a specific property
  res.status(200).json({
    status: "success",
    data: "1 data",
  });
};

/*--------User controller--------*/

const getAllUsers = (req, res) => {
  res.status(200).json({
    requesAt: req.requestTime,
    status: "success",
    data: "temp",
  });
};

const createUser = (req, res) => {
  console.log(req.body);
  //Send Id

  res.send("Done");
};

const updateUser = (req, res) => {
  console.log(req.body);
  //will update a specific property
  res.send("Done");
};

const deleteUser = (req, res) => {
  // console.log(req.body);
  //will update a specific property
  res.status(204).json({
    status: "success",
    data: null,
  });
};

const getUser = (req, res) => {
  console.log(req.body.id);
  //will update a specific property
  res.status(200).json({
    status: "success",
    data: "1 data",
  });
};

// app.get("/api/v1/task", getAllTask);

// app.get("/api/v1/task/:id", getTask);

// app.post("/api/v1/task", createTask);

// app.patch("/api/v1/task/:id", updateTask);

// app.delete("/api/v1/task/:id", deleteTask);

//Routes

//Adding express routes
const TaskRoutes = express.Router();
const UserRoutes = express.Router();

//Task Route
TaskRoutes.route("/").get(getAllTask).post(createTask);
TaskRoutes.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

//User Route
UserRoutes.route("/").get(getAllUsers).post(createUser);
UserRoutes.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

//(Connecting routes via middleware)
//first as it sees this url /api/v1/task it will run TaskRoutes middleware ,as TaskRoutes is also a middleware
app.use("/api/v1/task", TaskRoutes);
app.use("/api/v1/user", UserRoutes);

//Server
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
