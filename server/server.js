const express = require('express');
const cors = require('cors');
require("dotenv").config();
require('./mydatabase/mydatabase')
const port = process.env.PORT || 8000
const myapp = express();

const myroute = require('./myrouting/myrouting')

myapp.use(cors());    
myapp.use(express.json());
myapp.use(myroute);

myapp.listen(port,()=>{
    console.log(`server is runing at:${port}`)
})