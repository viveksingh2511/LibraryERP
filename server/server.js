const express = require('express');
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 8000
const myapp = express();

myapp.use(cors());    
myapp.use(express.json());


myapp.get('/', (req,res)=>{
    res.send(`server is runing at:${port}`)
})

myapp.get('/home', (req,res)=>{
    res.send("this is home page")
})
myapp.listen(port,()=>{
    console.log(`server is runing at:${port}`)
})