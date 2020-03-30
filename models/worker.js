const mongoose = require('mongoose');
const enums = require ('./enums')

const workerSchema = mongoose.Schema({
    name: String,
    country: String,
    phoneNum: String,
    mail: String,
    gender: { type: String, enum: Object.values(enums.GENDER) },
    role: { type: String, enum: Object.values(enums.WORKER_ROLES)}
});

module.exports = mongoose.model('Worker', workerSchema);