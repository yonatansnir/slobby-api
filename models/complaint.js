const mongoose = require('mongoose');
const enums = require('./enums').COMPLAINT_STATUS;

const complaintSchema = mongoose.Schema({
    subject: String,
    description: String,
    //complainantID: String, is this neccesary?
    complaintStatus: String //{ type: String, enum: Object.values(enums.COMPLAINT_STATUS)}
});

module.exports = mongoose.model('Complaint', complaintSchema);