import express from "express"
import {Server} from "socket.io";
const app = express();

app.use(express.static('public'));
const server = app.listen(3000);

const io = new  Server(server);


io.on('connection',(socket)=>{
    console.log(socket.id); 
    socket.on("chat",data=>{
        io.sockets.emit("chat",data);
    });

    socket.on('type',data=>{
        socket.broadcast.emit('type',data);
    });
});

