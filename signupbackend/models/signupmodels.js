const mongoose = require("mongoose")

const signUpTemp = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    surName:{
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
    },

    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("mytabel",signUpTemp)