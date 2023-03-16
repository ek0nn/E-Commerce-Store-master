import { useState } from "react";

import React from 'react'
import ChatWindow from "./ChatWindow";
import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'


const Profile = props => {
    return (
        <div className="s">

<button class="btn btn-primary ml-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Live Chat</button>
<ChatWindow>
    
</ChatWindow>

    


        </div>
    )
}

export default Profile