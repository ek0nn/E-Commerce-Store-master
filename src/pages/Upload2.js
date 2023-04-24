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
      <div class="container-xxl ">


        <div class="py-5 text-center">
          <div className='row'>
            <div class="col-sm-6">

              
<button onClick={submitB2}> Upload</button>

</div>
    </div>
    </div>
    </div>

    </form>


  )
}

export default Upload2