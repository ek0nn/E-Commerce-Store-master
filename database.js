const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://ekon1:1234@cluster0.3ereih1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("mongoosedb connected");
})
.catch(()=> {
  console.log("error failed connection");
})


const checkout = new mongoose.Schema({

  firstname:{
    type:String,
    required:true
  },
  surname:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  number:{
    type:String,
    required:true
  },
  address2:{
    type:String,
    required:false
  },
  postcode:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  cardItems: {
    type: Object,
    required: true
  },
  totalPrice: {
    type: String,
    required: true
  },

  })

 
const collection1 = mongoose.model("order", checkout)

module.exports=collection1
