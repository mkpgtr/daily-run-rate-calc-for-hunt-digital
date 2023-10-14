const mongoose = require('mongoose')

const EntrySchema = new mongoose.Schema({

    leadCount : {
        type:Number,
    },
    drr : {
        type:Number,
    },
    excludedDates : {
        type:[{}]
    },
    numberOfDays : {
        type:Number
    },
    startDate : {
        type:Date,
    },
    endDate : {
        type:Date
    },
    monthYear : {
       type:{}
    },
    lastUpdatedAt : {
        type:Date
    }

},{timestamps:true})

module.exports = mongoose.model('Entry', EntrySchema)