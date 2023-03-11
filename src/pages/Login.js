import axios from 'axios'
import { id } from 'prelude-ls'
import React from 'react'
import { useNavigate, useNavigation } from 'react-router'
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

  const history=useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e){
    e.preventDefault();
  
  try {

        await axios.post("http://localhost:4000/signin",{ 
                email,password

         })
         .then(res=> {
          if(res.data =="exist"){
            history("/",{state:{id:email}} )
          }
          else if(res.data =="newuser"){
            alert("You are not logged in")
          }
         })

         .catch(e=> {
          alert("inncorrect details")
          console.log(e)
         })
  } 
  catch (e){
    console.log(e)

  }
}
  
return (
  <div class="container-signup">

      <form action="POST" className="signup-form">
      <h1 className="signup-title">Log in</h1>

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
            class="btn44 btn-primary btn-lg btn-block">Log in</button>
              <br />
      <p>Dont have an account ?</p>
      <Link to="/signup"> Sign up now</Link>
      <br />
      </form>

    
    </div>
  )
}


export default Login