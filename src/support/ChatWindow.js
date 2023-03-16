import React from "react";
import { useState } from "react";
import ChatEmail from "./ChatEmail";
import CE from "./CE";
import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'

const ChatWindow = props => {

    const[user, setUser] = useState(null)
    const[chat, setChat] = useState(null)

    return (
        <div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Live Chat</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
<ChatEmail 

setUser = {user => setUser(user)}
setChat = {chat => setChat(chat)}>




</ChatEmail>
<div >
      <ChatEngineWrapper>
      chat={chat}
 user={chat}
        <Socket
         ProjectID={process.env.REACT_APP_CE_PROJECT_ID}
         userName={props.user.email}
         userSecret={props.user.email}
        >

        </Socket>
        <ChatFeed activeChat={props.chat.id}></ChatFeed>
      </ChatEngineWrapper>
</div>
    </div>
        </div>
    )
}

export default ChatWindow