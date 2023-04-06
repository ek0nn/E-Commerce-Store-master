const express = require("express")
const collection = require('./loginDetails')
const collection1 = require('./database')
const collection2 = require("./community")
const collection3 = require("./community2")
require("dotenv").config()
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const mongoose = require ("mongoose")
mongoose.connect("mongodb+srv://ekon1:1234@cluster0.3ereih1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("mongoosedb connected");
})
.catch(()=> {
  console.log("error failed connection");
})

const communityImg=mongoose.model("Community")
const communityImg2=mongoose.model("Community3")

app.get('/signin', cors(), (req, res) => {
})

app.post("/signin", async (req, res) => {
  const { firstname, surname, email, password } = req.body


  try {

    const check = await collection.findOne({ email: email })
    if (check) {
      res.json("exist")
    }
    else {
      res.json("newuser")
    }

  }
  catch (e) {
    res.json("newuser")

  }
})

app.post("/signup", async (req, res) => {
  const { firstname, surname, email, password } = req.body

  const data = {
    firstname: firstname,
    surname: surname,
    email: email,
    password: password

  }


  try {

    const check = await collection.findOne({ email: email })
    if (check) {
      res.json("exist")

    }
    else {
      res.json("newuser")
      await collection.insertMany([data])
    }

  }
  catch (e) {
    res.json("newuser")

  }
})


app.post("/Checkout", async (req, res) => {
  const { firstname, surname, address, address2, number, postcode, city, cardItems, totalPrice } = req.body


  const data = {
    firstname: firstname,
    surname: surname,
    address: address,
    address2: address2,
    number: number,
    postcode: postcode,
    city: city,
    cardItems: cardItems,
    totalPrice: totalPrice

  }

  await collection1.insertMany([data])



})
app.post("/upload2", async (req, res) => {
  const { firstname, surname, number, email, image } = req.body


  const data = {
    image:image,
    firstname: firstname,
    surname: surname,
    email: email,
    number: number,
 

  }

  await collection2.insertMany([data])



})

app.post("/upload", async(req,res) => {
  const {b64} = req.body;
  try {
    await communityImg.create({image:b64});
    req.send({Status: "working"})
  } catch (error) {
    res.send({Status: "error", data:error});

  }
})


app.get("/getCom", async (req,res) => {
  try {
    await communityImg.find({}).then(data => {
      res.send({status: "ok", data: data})
    })
  } catch (error) {

  }
})
app.get("/getCom2", async (req,res) => {
  try {
    await communityImg2.find({}).then(data => {
      res.send({status: "ok", data: data})
    })
  } catch (error) {

  }
})
app.listen(4000, () => {
  console.log("port con");
})