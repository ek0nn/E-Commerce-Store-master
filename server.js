const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

const routesUrls = require("./signupbackend/routes/routes")
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database con "))

app.use(express.json())
app.use(cors())
app.use("/app", routesUrls)
app.listen(3000, () => console.log("server is up"))




