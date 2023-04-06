import React from 'react'
import { useState } from 'react';
import axios from "axios";


function Upload2() {
 
const [communityImg,setCommunityImg] = useState("");
const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

async function submitB2(e) {
  e.preventDefault();
  try {
    await axios.post("http://localhost:4000/upload2", {
      image,
      email,
      firstname,
      surname,
      number,
   
    })
    .then(res => {
      if (res.data == "s") {
        alert("An account using the above email has already been used");
      } else if (res.data == "ss") {
        history("/");
      }
    })

    .catch(e => {
      alert("error");
      console.log(e);
    })

} catch (e) {
  console.log(e)

}
}
  return (
  

    <form action="POST">
      <div class="container">


        <div class="py-5 text-center">
          <div className='row'>
            <div class="col-sm-6">

              <label for="firstname" class="form-label-2">First Name</label>
              <input type="text" class="form-control-2" id="firstname" placeholder="" required=""
                onChange={(e) => {
                  setFirstname(e.target.value);
                }} />
              <div class="invalid-feedback">
                Please enter your first name.
              </div>
            </div>
            <div class="col-sm-6">

<label for="surname" class="form-label-2">First Name</label>
<input type="text" class="form-control-2" id="firstname" placeholder="" required=""
  onChange={(e) => {
    setSurname(e.target.value);
  }} />
<div class="invalid-feedback">
  Please enter your surname name.
</div>
</div>
<div class="col-sm-6">

<label for="number" class="form-label-2">First Name</label>
<input type="text" class="form-control-2" id="firstname" placeholder="" required=""
  onChange={(e) => {
    setNumber(e.target.value);
  }} />
<div class="invalid-feedback">
  Please enter your number .
</div>
</div>
<div class="col-sm-6">

<label for="email" class="form-label-2">First Name</label>
<input type="text" class="form-control-2" id="firstname" placeholder="" required=""
  onChange={(e) => {
    setEmail(e.target.value);
  }} />
<div class="invalid-feedback">
  Please enter your email.
</div>
<button onClick={submitB2}> Upload</button>

</div>
    </div>
    </div>
    </div>

    </form>


  )
}

export default Upload2