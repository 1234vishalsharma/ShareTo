const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const db = require('./db/database');
const router = require('./Routes/router');
const cors = require('cors');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);
db.dbConnect(process.env.DB_URL);
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());
app.use('/api' , router);
// Routes request
app.get('/' , (req,res)=>{
    res.json({
        msg : "Home Route"
    })
})




// listening on PORT 
server.listen(PORT , ()=>{
    console.log("APP is listening on PORT " , PORT);
})