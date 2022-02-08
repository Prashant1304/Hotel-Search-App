//socket.on() means it will listen to the event

const express = require("express")
const app = express()//instance of express
const  server = require("http").createServer(app)
const cors = require("cors")
const {Server} = require("socket.io")
app.use(cors())
const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",//telling socket.io ki it is ok to accept socket connection to this url 
        methods: ["GET", "POST"],//only accept this methdes
    },
})

io.on("connection",(socket) => {
    console.log(`user connected ${socket.id}`)

    socket.on("Join_Room",(data) => {//her data is user id which is emmited from newapp.js
        socket.join(data)
        console.log( socket.id, "user Joinde Room" ,data)
    }) 

    socket.on("Send_Message",(data) => {
        socket.to(data.room).emit("recive_Mesage",data)//emit message to whoever in that specified room//it will emit the message that i just send to everyone who is lisning to that message in same room
        console.log(data)
    })

    socket.on("Disconnect", () => {
        console.log("Disconnected",socket.id)
    })
})
server.listen(3001, () => {
    console.log("SERVER IS RUNNING")
})

