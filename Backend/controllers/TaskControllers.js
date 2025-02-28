const taskModel = require('./../models/taskModel');

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


exports.getAllTask = async (req, res) => {
 try{
//  1.Filtering

  //First way
  // const allTask = await taskModel.find({
  //   option:"low",
  //   title:"asdds"
  // })

  //2nd way
  // const allTask= await taskModel.find().where('option').equals('low').where('title').equals('asdds')
  
  //final way
  //const allTask =await taskModel.find(req.query)
  
 //excluding parameter
 //Build Query
 const excludeObj = {...req.query}
 const excludeFields=['limit','sort','page','fields']

 excludeFields.forEach((el)=> delete excludeObj[el])


//  const query =await taskModel.find(excludeObj)
 
//  const allTask =await query

//2.Advance filter
// http://localhost:4000/api/v1/task?title[gte]=asdds we get console {title:{gte:'asdds'}} just an example
let queryStr = JSON.stringify(excludeObj)
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match =>`$${match}`)
console.log(JSON.parse(queryStr)) //we are converting it to  {title:{$gte:'asdds'}} we are adding $ to it so ooperator can work
let query = taskModel.find(JSON.parse(queryStr))
 
//3 Sorting (first exclude the field as above,why because it will try  will attempt to match these parameters as fields within documents, which can cause unexpected behavior (like returning an empty array) then do other thing as below) 
//using sort

//for single sort
// if(req.query.sort){
//   // console.log(req.query.sort)
//   query=query.sort(req.query.sort)

// }

//Sorting by multiple values

// if(req.query.sort){
//   const sortBy=req.query.sort.split(',').join('')
//   console.log(sortBy,'why d')
//   query=query.sort(sortBy)
//   console.log(query,'hu')
// }else{
//   query=query.sort('-createdAt')
// }

//4 Limit(to limit the data) using fields
if(req.query.fields){
  const sortByFields = req.query.fields.split(',').join('')
  query=query.select(sortByFields)
}else{
  query=query.select('-__v')
}

//console.log(query,'tty')
// console.log(query)
 const allTask=await query
  console.log(allTask,'ssk')
  res.status(200).json({
    status: "success",
    data: allTask
  });
}
catch(err){
  res.status(400).json({
    status:"fail",
    message:err
  })
}
};

exports.createTask = async (req, res) => {
//one way of to add 
  //  const newTask = new taskModel(req.body);
//  await newTask.save();
try{
const newTask= await taskModel.create(req.body)

res.status(200).json({
  status:"success",
  data:{
    task:newTask
  }
})
}catch(err){
  res.status(400).json({
    status:"fail",
    message:err
  })
}
 
};


exports.updateTask = async(req, res) => {
try{
  const task = await taskModel.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
  })

  res.status(200).json({
    status:"success",
    task:task
  })
  }
  catch(err){
    res.status(400).json({
      status:"fail",
      message:err
    })
  }
};

exports.deleteTask = async(req, res) => {
  try{
  const task = await taskModel.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status:"success",
    message:"Deleted Successfully"
  })
  }
  catch(err){
    res.status(400).json({
      status:"fail",
      message:err
    })
  }
};

exports.getTask = async (req, res) => {
try{
  const task= await taskModel.findById(req.params.id);
  //await taskModel.findOne({_id:req.params.id}); another way
  //will update a specific property
  res.status(200).json({
    status: "success",
    data: task,
  });
}catch(err){
  res.status(400).json({
    status:"fail",
    message:err
  })
}
};
