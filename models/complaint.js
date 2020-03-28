const mongoose = require('mongoose');
const enums = require ('./enums')
//import { COMPLAINT_STATUS } from './enums';

const complaintSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subject: String,
    description: String,
    complainantID: {type: mongoose.Schema.ObjectId, ref: 'Guest'},
    complaintStatus:{ type: String, enum: Object.values(enums.COMPLAINT_STATUS)}
});

module.exports = mongoose.model('Complaint', complaintSchema);