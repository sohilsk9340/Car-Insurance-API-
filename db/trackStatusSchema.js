const mongoose = require('mongoose')

const trackStatusSchema = new mongoose.Schema({
    claimId:{
        type: String,
        required: true,
      
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