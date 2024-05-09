const mongoose = require('mongoose')

const trackStatusSchema = new mongoose.Schema({
    claimID:{
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: String
    },
    description:{
        type: String
    },
    claimStatus:{
        type: String
    },
    progressUpdate:{
        type: String
    }
});

module.exports = trackStatusSchema;