//This is a middleware function to check if data is empty in post method
exports.checkBody = (req, res, next) => {
  console.log(req.body.data, "mayur");
  if (!req.body.data) {
    return res.json({
      status: "error",
      message: "Nothing in here",
    });
  }
  next();
};

exports.CheckIDForParamMiddleware = (req, res, next, val) => {
  if (val == "1")
    return res.json({
      message: "This is middleware json for id",
      id: val,
    });
  console.log("checked id", val);
  next();
};
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
