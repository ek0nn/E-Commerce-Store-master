import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:4000/signup", {
          email,
          password,
          firstname,
          surname,
        })
        .then(res => {
          if (res.data == "exist") {
            alert("An account using the above email has already been used");
          } else if (res.data == "newuser") {
            history("/", {state:{id:email}});
          }
        })

        .catch(e => {
          alert("error");
          console.log(e);
        })
  
      }  catch (e){
        console.log(e)
    
      }
    }

  return (

    <div class="container-signup">

      <form action="POST" className="signup-form">
      <h1 className="signup-title"> Signup</h1>

      <div class="container-signup2">
      <div class = "signuphead"> Firstname: </div>
        <input className="signup-input"
          type="first"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
                </div>

        <div class="container-signup2">
        <div class = "signuphead"> Surname: </div>

        <input className="signup-input"
          type="2nd"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        </div>




      <div class="container-signup2">
      <div class = "signuphead"> Email: </div>
        <input className="signup-input"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            
          }}
        />
        </div>
        <div class="container-signup2">
        <div class = "signuphead"> Password: </div>

        <input className="signup-input"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        </div>
       
        <button type="submit" onClick={submit}
            class="btn44 btn-primary btn-lg btn-block">Sign up</button>
      </form>

      <br />
      <Link to="/signin"> ll</Link>
      <br />
    </div>
  )
}

export default Signup
