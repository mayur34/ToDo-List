const express = require("express");
const app = express();

const port = 4000;

app.use(express.json());

const getAllTask = (req, res) => {
  res.status(200).json({
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

// app.get("/api/v1/task", getAllTask);

// app.get("/api/v1/task/:id", getTask);

// app.post("/api/v1/task", createTask);

// app.patch("/api/v1/task/:id", updateTask);

// app.delete("/api/v1/task/:id", deleteTask);

app.route("/api/v1/task").get(getAllTask).post(createTask);
app.route("/api/v1/task/:id").get(getTask).patch(updateTask).delete(deleteTask);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
