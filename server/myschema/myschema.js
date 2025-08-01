const mongoos = require('mongoose')

const mydatas = mongoos.Schema({
    booktitle:{
        type:String
    },
    library:{
        type:String
    },
    booktype:{
        type:String
    },
    author:{
        type:String
    },
    accessionno:{
        type:String
    },
    bookimg:{
        type:String
    },
    
})

const myschimatype = mongoos.model('addbook',mydatas);

module.exports = myschimatype;