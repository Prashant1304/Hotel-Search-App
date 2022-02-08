import React, { useState } from "react"
import useChat from "./socketUseChat";
function ChatRoom(props) {
    const roomId = window.location.pathname
    const { messages, sendMessage } = useChat(roomId);
    const [newMessage,SetNewMessage] = useState("")
console.log(props,"props",messages,)

    const handleNewMessage = (e) => {
        SetNewMessage(e.target.value)
    }

    const handleMessage = () => {
        sendMessage(newMessage)//
        SetNewMessage("")
    }

    
    return(
        <div>
            <div>
                <h1>ROOM: {roomId}</h1>
            </div>
            <div>
                <ol>
                    {messages.map((x,y) => (
                        <li
                        key={y}
                      >
                        {x.body}
                      </li>
                    ))}
                </ol>
            </div>
            <textarea value={newMessage} onChange={handleNewMessage} ></textarea>
            <button onClick={handleMessage}>SEND</button>
        </div>
    )
}

export default ChatRoom