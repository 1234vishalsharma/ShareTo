const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());


// Routes request
app.get('/' , (req,res)=>{
    res.json({
        msg : "Home Route"
    })
})


// listening on PORT 
app.listen(PORT , ()=>{
    console.log("APP is listening on PORT " , PORT);
})

