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
  required: false
},
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

const collection2 = mongoose.model("Community", CommunitySchema)
module.exports=collection2
