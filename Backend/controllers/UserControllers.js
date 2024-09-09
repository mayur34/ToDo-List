exports.getAllUsers = (req, res) => {
  res.status(200).json({
    requesAt: req.requestTime,
    status: "success",
    data: "temp",
  });
};

exports.createUser = (req, res) => {
  console.log(req.body);
  //Send Id

  res.send("Done");
};

exports.updateUser = (req, res) => {
  console.log(req.body);
  //will update a specific property
  res.send("Done");
};

exports.deleteUser = (req, res) => {
  // console.log(req.body);
  //will update a specific property
  res.status(204).json({
    status: "success",
    data: null,
  });
};

exports.getUser = (req, res) => {
  console.log(req.body.id);
  //will update a specific property
  res.status(200).json({
    status: "success",
    data: "1 data",
  });
};
