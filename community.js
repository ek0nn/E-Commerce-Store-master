const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://ekon1:1234@cluster0.3ereih1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("mongoosedb connected");
})
.catch(()=> {
  console.log("error failed connection");
})


const CommunitySchema = new mongoose.Schema({

image:{
  type:String,
  required:true
},
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
number:{
  type:String,
  required:true
}

})

const collection2 = mongoose.model("Community", CommunitySchema)
module.exports=collection2
