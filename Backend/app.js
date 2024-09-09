const express = require("express");
const app = express();

const port = 4000;

app.use(express.json());

app.get("/api/v1/task", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "temp",
  });
});

app.post("/api/v1/task", (req, res) => {
  console.log(req.body);
  //Send Id

  res.send("Done");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
