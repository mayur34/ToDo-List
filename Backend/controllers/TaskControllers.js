exports.getAllTask = (req, res) => {
  res.status(200).json({
    requesAt: req.requestTime,
    status: "success",
    data: "temp",
  });
};

exports.createTask = (req, res) => {
  console.log(req.body);
  //Send Id

  res.send("Done");
};

exports.updateTask = (req, res) => {
  console.log(req.body);
  //will update a specific property
  res.send("Done");
};

exports.deleteTask = (req, res) => {
  // console.log(req.body);
  //will update a specific property
  res.status(204).json({
    status: "success",
    data: null,
  });
};

exports.getTask = (req, res) => {
  console.log(req.body.id);
  //will update a specific property
  res.status(200).json({
    status: "success",
    data: "1 data",
  });
};
