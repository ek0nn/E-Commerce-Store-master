const express = require("express")
const router = express.Router()
const signUpTempC = require("../models/signupmodels")



router.post("/signup", (request, response) => {
    const signedUpUser = new signUpTempC ({
        firstName:request.body.firstName,
        surName:request.body.surName,
        password:request.body.password,
        email:request.body.email




    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router