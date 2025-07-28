const mongoos = require('mongoose')

const mydatas = mongoos.Schema({
    empname:{
        type:String
    },
    contact:{
        type:String
    },
    emptype:{
        type:String
    },
    empcode:{
        type:String
    },
    designation:{
        type:String
    },
    empimg:{
        type:String
    }
})

const empschimatype = mongoos.model('addstaff',mydatas);

module.exports = empschimatype;