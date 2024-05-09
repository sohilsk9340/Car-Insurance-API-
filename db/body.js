const { default: mongoose } = require("mongoose");
const fileClaimSchema = require("./fileClaimSchema");
const trackStatusSchema = require("./trackStatusSchema");
const contactAgentSchema = require("./contactAgentSchema");

const DB_NAME = process.env.DB_NAME || "insurance";
const URI = process.env.MONGO_URI || "mongodb+srv://insurance:insurance@cluster0.elwmgmk.mongodb.net";
const MONGO_URI = `${URI}/${DB_NAME}`;

mongoose.connect(MONGO_URI).then(() => console.log("Connected")).catch((err) => console.log(err))

const fileClaim1 = mongoose.model('fileClaim', fileClaimSchema, 'fileClaim1');
const trackStatus1 = mongoose.model('trackStatus', trackStatusSchema, 'trackStatus1');
const contactAgent1 = mongoose.model('contactAgent', contactAgentSchema, 'contactAgent1');

module.exports = {fileClaim1, trackStatus1, contactAgent1};