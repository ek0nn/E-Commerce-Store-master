
const express = require("express")
const collection = require('./database')
const collection1 = require('./database')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

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



app.listen(4000, () => {
  console.log("port con");
})
