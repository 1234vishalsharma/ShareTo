const express = require('express');
const app = express();
const AuthRouter = require('./Routes/AuthRouter')

const bodyParser =  require('body-parser') 
const cors = require('cors');

require('dotenv').config();
require('./Models/db')
const PORT = process.env.PORT || 8080;


app.get('/ping',(req, res)=>{
    res.send('pinggg');
})

app.use(bodyParser.json());
app.use(cors());


app.use('/auth', AuthRouter);


app.listen(PORT, () => {
    console.log(`Server is runnig on ${PORT}`);
})