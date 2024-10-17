const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const db = require('./db/database');
const router = require('./Routes/router');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

let rooms = [];

const app = express();
app.use(cors());

const httpserver = http.createServer(app);
const io = new Server(httpserver , { cors : {
        origin: "*", // Your React frontend URL
    },
});

db.dbConnect(process.env.DB_URL);
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/api' , router);

io.on('connection' , (socket) => {
    console.log("connected to sender");
    console.log("socket id is: " , socket.id);
    socket.broadcast.emit('Data' , socket.id);
})


// // Routes request
// app.get('/' , (req,res)=>{
//     res.json({
//         msg : "Home Route"
//     })
// })

// listening on PORT 
httpserver.listen(PORT , ()=>{
    console.log("APP is listening on PORT " , PORT);
})