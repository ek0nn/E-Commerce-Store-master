const express = require("express")
const collection = require('./database')
const cors =require ("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.get('/signin', cors(),(req,res)=>{
})

app.post("/signin", async (req,res) => {
  const{firstname,surname,email,password} = req.body


  try {

    const check= await collection.findOne({email:email})
    if (check){
      res.json("exist")
    }
    else{
      res.json("newuser")
    }
   
  }
  catch (e){
    res.json("newuser")

  }
})

app.post("/signup", async (req,res) => {
  const{firstname,surname,email,password} = req.body

  const data = {
    firstname:firstname,
    surname:surname,
    email:email,
    password:password
   
  }


  try {

    const check= await collection.findOne({email:email})
    if (check){
      res.json("exist")
      
    }
    else{
      res.json("newuser")
      await collection.insertMany([data])
    }
   
  }
  catch (e){
    res.json("newuser")

  }
})
app.listen(4000, ()=> {
  console.log("port con");
})