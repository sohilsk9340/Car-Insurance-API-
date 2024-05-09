const mongoose = require('mongoose')

const contactAgentSchema = new mongoose.Schema({
    concern:{
        type: String,
        required: true
    }
});

module.exports = contactAgentSchema;