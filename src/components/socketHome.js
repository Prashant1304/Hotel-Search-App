import React, { useState } from "react"
import { Link } from "react-router-dom";
function SocketHome() {
    const [room,setRoom] = useState("")



    const handleValue = (e) => {
        setRoom(e.target.value)
    }
    return(
        <div>
            <input value={room} onChange={handleValue}></input>
            <Link  to={`${room}`} >JOIN</Link>
        </div>
    )
}

export default SocketHome