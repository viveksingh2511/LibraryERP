const mongoos = require('mongoose')
const url = process.env.DATABASE

mongoos.connect(url).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
    
})

module.exports = mongoos