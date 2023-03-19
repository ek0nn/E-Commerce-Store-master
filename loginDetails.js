const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://ekon1:1234@cluster0.3ereih1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("mongoosedb connected");
})
.catch(()=> {
  console.log("error failed connection");
})


const newSchema = new mongoose.Schema({

firstname:{
  type:String,
  required:true
},
surname:{
  type:String,
  required:true
},
email:{
  type:String,
  required:true
},
password:{
  type:String,
  required:true
}
})

const collection = mongoose.model("login", newSchema)
module.exports=collection
