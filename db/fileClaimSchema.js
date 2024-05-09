const mongoose = require('mongoose');

const fileClaimSchema = new mongoose.Schema({
    // userId: {
    //     type: String,
    //     required: true,
    //     unique: true
    // }, 
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
       
    },
    damageDesc: {
        type: String,
        required: true
    },
    photo:{
        type: String
    },
    additionalInfo:{
        type: String
    }
});

module.exports = fileClaimSchema;