// const express = require('express');
// const http = require('http');
// const socket = require('socket.io');
// const cors = require('cors');
import {express} from 'express';
import {http} from 'http';
import {socket} from 'socket.io';

require('dotenv').config();

const app = express();

const server = http.createServer(app);
const io = socket(server , {
    cors : {
        "origin" : "*:*"
    }
});


io.on('init' , (socket) => {
    console.log("connected to sender");
    console.log("socket id is: " , socket.id);
})

io.on('connection' , (socket) => {
    console.log("socket is is: " , socket.id);
    socket.on('sender-join' , (msg) => {
        console.log("Sender joined message : " , msg);
    })
    socket.on('reciever-join' , (msg) => {
        console.log("Reciever joined : " , msg);
    })
})


// listening on PORT 
server.listen(8000 , ()=>{
    console.log("APP is listening on PORT " , PORT);
})