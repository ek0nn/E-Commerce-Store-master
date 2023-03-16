import React from "react";
import Profile from "./Profile"
import { useState } from "react";
import ChatWindow from "./ChatWindow";
import CE from "./CE"
import { Link } from "react-router-dom";

function Support() {
    const {vis, setVis} = useState(false)
   // onClick ={() => props.onClick && props.onClick}
  return (
    
    <div className="container-md">
      
    <h2 className="supportT">Customer support</h2>
    <div className="containerDescChat-sm">
        <p className="pDescp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus erat non justo finibus, non finibus magna commodo. Maecenas quam turpis, sagittis vitae eros viverra, dapibus mollis justo. </p>
     
<Profile>
  
</Profile>
    </div>

  
        </div>
  )
}

export default Support