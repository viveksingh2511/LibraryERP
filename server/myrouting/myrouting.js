const express = require('express')
const mydatapattern = require('../myschema/myschema')

const myapp = express.Router();

myapp.get('/', (req, res) => {
    res.send(`server is runing at:${port}`)
})

myapp.get('/home', (req, res) => {
    res.send("this is home page")
})

myapp.post("/addbookpage", async (req, res) => {
    const { booktitle, library, booktype, author, accessionno, bookimg } = req.body;
    if (booktitle == '' || accessionno == '') {
        res.status(500).json({ data: postdata, status: 288, message: "faild addbook" });
    } else {
        const postdata = new mydatapattern({
            booktitle, library, booktype, author, accessionno, bookimg
        })
        await postdata.save();
        res.status(200).json({data:postdata,status:255,message:"book add successfully"});
    }
})

module.exports = myapp