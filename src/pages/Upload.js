import React, { useState } from 'react'
import Upload2 from './Upload2';

function Upload() {
 
const [communityImg,setCommunityImg] = useState("");

function conTo64(e){
console.log(e);
//conver to base 64
var filereader = new FileReader();
filereader.readAsDataURL(e.target.files[0]);
filereader.onload = () => {
    setCommunityImg(filereader.result)
};
filereader.onerror = error => {
    console.log("err:", error);
};
}
  
function submitB() {
 fetch ("http://localhost:4000/upload", {
    method: "POST",
    crossDomain: true,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
        b64:communityImg
    })
 }).then((res) => res.json()).then((data) => console.log(data))
}
  return (
    <div className='container-xxl upload dsad2s11'>
                <h2>Community</h2>

      <div class="col-sm-6 dispii2"> 
  
  <input 
    accept='image/*'
    type="file"
    onChange={conTo64}
    >
    </input>
    {communityImg == "" || communityImg == null? "": <img width={100} height={100} src={communityImg}/>}
    <button className = "addToCartBtn111" onClick={submitB}> Confirm Image</button>
    <button className = "addToCartBtn111" href = "./Community"> View community</button>
    </div>
    </div>
  )
}

export default Upload