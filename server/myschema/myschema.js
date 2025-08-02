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
    // Reference to staff document (if book is assigned)
    assignedTo: {
    type: mongoos.Schema.Types.ObjectId, // Stores ObjectId of staff
    ref: 'addstaff',                     // Refers to staff collection
    default: null                        // Default = not assigned
  }
})

const myschimatype = mongoos.model('addbook',mydatas);

module.exports = myschimatype;