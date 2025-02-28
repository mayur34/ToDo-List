const dotenv=require('dotenv')

//Providing path to env file
dotenv.config({path:'./config.env'})

const mongoose=require('mongoose')
const app = require("./app");

const port = process.env.PORT || 4000;

const DB= process.env.DATABASE_URL.replace('<db_password>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology: true
}).then(con=>{
   console.log(con.connections)
  console.log("Connection SuccessFul")
})



//Server
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
