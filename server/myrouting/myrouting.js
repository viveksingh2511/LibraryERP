const express = require('express')
const mydatapattern = require('../myschema/myschema')
const empdatapattern = require('../myschema/myschema2')

const myapp = express.Router();

myapp.get('/', (req, res) => {
    res.send(`server is runing at:${port}`)
})

myapp.get('/home', (req, res) => {
    res.send("this is home page")
})
// book api
myapp.post("/addbookpage", async (req, res) => {
    const { booktitle, library, booktype, author, accessionno, bookimg } = req.body;
    if (booktitle == '' || accessionno == '') {
        const postdata = new mydatapattern({
            booktitle, library, booktype, author, accessionno, bookimg
        })
        res.status(500).json({ data: postdata, status: 288, message: "faild addbook" });
    } else {
        const postdata = new mydatapattern({
            booktitle, library, booktype, author, accessionno, bookimg
        })
        await postdata.save();
        res.status(200).json({data:postdata,status:255,message:"book add successfully"});
    }
})

myapp.get("/allbooklist", async (req,res)=>{
    const allbook = await mydatapattern.find();
    res.status(200).json({allbook:allbook,status:220,message:"all books list"})
})

myapp.delete("/deleterecord/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removerecord = await mydatapattern.findByIdAndDelete(id);
    console.log(removerecord);
    
    if (!removerecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Selected data removed" });
  } catch (err) {
    console.error("Error deleting record:", err);
    res.status(500).json({ error: "Failed to delete record" });
  }
});

myapp.get("/singlebookrecord/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singlebook = await mydatapattern.findById(id);
    if (!singlebook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Single book data", mydata: singlebook });
  } catch (err) {
    console.error("Error fetching single book:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// myapp.patch("/updatebook/:id", async(req,res)=>{
//         const {id} =req.params;
//             const singlebook = await mydatapattern.findByIdAndUpdate(id,req.body,{new:true});
//              res.status(200).json({message:"update book",status:251,mydata:singleuser});
//     });
myapp.patch("/updatebook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await mydatapattern.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Book updated", status: 251, mydata: updatedBook });
  } catch (err) {
    console.error("Error updating book:", err);
    res.status(500).json({ message: "Update failed" });
  }
});

// emp api
myapp.post("/addstaff", async (req, res) => {
    const { empname, contact, emptype, empcode, designation, empimg } = req.body;
    if (empname == '' || empcode == '') {
        const postdata = new empdatapattern({
            empname, contact, emptype, empcode, designation, empimg
        })
        res.status(500).json({ data: postdata, status: 288, message: "faild addstaff" });
    } else {
        const postdata = new empdatapattern({
            empname, contact, emptype, empcode, designation, empimg
        })
        await postdata.save();
        res.status(200).json({data:postdata,status:255,message:"staff add successfully"});
    }
})

myapp.get("/allstafflist", async (req,res)=>{
    const allstaff = await empdatapattern.find();
    res.status(200).json({allstaff:allstaff,status:220,message:"all staff list"})
})

myapp.get("/singlestaffrecord/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singlestaff = await empdatapattern.findById(id);
    if (!singlestaff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json({ message: "Single staff data", mydata: singlestaff });
  } catch (err) {
    console.error("Error fetching single staff:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

myapp.patch("/updatestaff/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedstaff = await empdatapattern.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Staff updated", status: 251, mydata: updatedstaff });
  } catch (err) {
    console.error("Error updating staff:", err);
    res.status(500).json({ message: "Update failed" });
  }
});


myapp.delete("/deletestaffrecord/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removestaffrecord = await empdatapattern.findByIdAndDelete(id);
    console.log(removestaffrecord);
    
    if (!removestaffrecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Selected data removed" });
  } catch (err) {
    console.error("Error deleting record:", err);
    res.status(500).json({ error: "Failed to delete record" });
  }
});


module.exports = myapp