//here we are sending and reciving messages from socket io
import React, { useEffect, useState }  from "react";


function Chat({socket,room,userName}) {//here we are reciving props named as socket from our Newapp component
    console.log(socket,room,userName)
    const [currentMessage,setCurrentMessage] = useState("")
    const [messageList,setMessageList] = useState([])


    const sendMessage = async () => {//making the function asyncronus so that we wait the message to be send  
    //when some one type the message then emmit the Send_Message event and send the data to backend
        if (currentMessage !== "") {
            const messgeData = {
                room:room,
                auther:userName,
                message:currentMessage,
                time:new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() //get the current date and the hour and minut at witch the message send
            }
           await socket.emit("Send_Message", messgeData)//sending the whole object to backend when button clicked
           setMessageList((list)=> [...list,messgeData])//see our own emmited message//and add to our list
        }
        setCurrentMessage("")
    }

    useEffect(() => {
        socket.on( "recive_Mesage",(data) => {
            setMessageList((list)=>[...list,data])//here the list is previous message and data is current message//when some one emmit the message event and when we listen to it it will set the message list state  it was before and add the new message 
            
            //  console.log(data)
        })
    },[socket])
    return ( 
    <div>
        <div>
            {messageList.map((x,y) => {
              return  <div key={y}>
                    {x.auther}: {x.message} : {x.time}
                </div>
            })}
        </div>
        <div>
            <input value={currentMessage} onChange={(e) => {setCurrentMessage(e.target.value)}}></input>
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div> 
    );
}

export default Chat ;