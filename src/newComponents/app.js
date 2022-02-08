import React,{ useState } from "react"
import io from "socket.io-client"
import Chat from "./chat"


const socket = io.connect("http://localhost:3001")//connecting our front-end to back-end and used to establissh a connection

function NewApp (props) {
    const [userName,setUserName] = useState("")
    const [room,setRoom] = useState("")
    const [showChat,setShowChat] = useState(false)


    const handleJoinRoom = () => {
        //here we are sending data from front end to back end when button clicked
        if(room !== "" && userName !== ""){
            socket.emit("Join_Room",room)
        }
        setShowChat(true)
    }
    return(
        <div>
            {!showChat? <div>
            <h3>Join The Chat</h3>
            <input placeholder="Enter Your Name"  onChange={(e) => {setUserName(e.target.value)}}></input>
            <input placeholder="Enter Room Name"  onChange={(e) => {setRoom(e.target.value)}}></input>
            <button onClick={handleJoinRoom}>Join Room</button>
            </div>
            :
            <Chat socket={socket} room={room} userName={userName} />}
        </div>
    )
}
export default NewApp