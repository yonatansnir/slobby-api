const mongoose = require('mongoose');
const enums = require ('./enums')
//import { GENDER, WORKER_ROLES } from './enums';

const workerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    country: String,
    phoneNum: String,
    mail: { type: String, unique: true },
    gender: { type: String, enum: Object.values(enums.GENDER) },
    role: { type: String, enum: Object.values(enums.WORKER_ROLES)}
});

module.exports = mongoose.model('Worker', workerSchema);