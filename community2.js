const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://ekon1:1234@cluster0.3ereih1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("mongoosedb connected");
})
.catch(()=> {
  console.log("error failed connection");
})


const Community3Schema = new mongoose.Schema({


firstname:{
  type:String,
  required: false
},
surname:{
  type:String,
  required: false
},
email:{
  type:String,
  required: false
},
number:{
  type:String,
  required: false
}

})

const collection3 = mongoose.model("Community3", Community3Schema)
module.exports=collection3
