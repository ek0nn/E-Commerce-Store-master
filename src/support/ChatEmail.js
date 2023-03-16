import React, { useState } from "react";
import axios from "axios";
import ChatWindow from "./ChatWindow";
import Profile from "./Profile";
import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'
import { useEffect } from "react";
import { ChatEngine } from "react-chat-engine";

const ChatEmail = props => {
    const [email, setEmail] = useState('')


    const [showChat, setShowChat] = useState(false)

   
    function handleSubmit(event) {
        event.preventDefault();
        console.log("email sending", email)

        getCreateUser(
            user => {
                props.setUser && props.setUser(user)
                getCreateChat(chat => {
                    props.setChat && props.setChat(chat)
                })
            }
        )
    }


    function getCreateUser (callback) {
        axios.put(
            'https://api.chatengine.io/users/',
            {
                "username": email,
                "secret": email,
                "email": email,

            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}

        )

        .then(r => callback(r.data))

    }

    function getCreateChat(callback) {
        axios.put(
            'https://api.chatengine.io/chats/',
            {
                "usernames": ["Sadhak (Admin)", email],
                "is_direct_chat": true

            },
            {headers: {
                "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
                "User-Name": email,
                "User-Secret": email,
            }}
        )

        

        .then(r => callback(r.data))

    }

    return (
        <div class="offcanvas-body">

<form  onSubmit={e => handleSubmit(e)} >
<div class = "signuphead"


> Email: </div>
        <input className="signup-input"
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email please"
       
          type="email"
         
        />
        <div>
        <button class="btn btn-primary sizebtn" type="button">
        <p className="subbtn22"> Submit </p>

        </button>
        </div>

        <div>

        </div>
       
            



        </form>
     
        </div>

    )
}

export default ChatEmail


