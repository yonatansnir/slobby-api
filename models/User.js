const mongoose = require('mongoose');
const enums = require ('./enums')
const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    country: String,
    phoneNum: String,
    mail: String,
    gender: { type: String, enum: Object.values(enums.GENDER) },
    role: { type: String, enum: Object.values(enums.WORKER_ROLES)}
})

module.exports = mongoose.model('User', UserSchema);