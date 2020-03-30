const mongoose = require('mongoose');
const enums = require ('./enums').GENDER
//import { GENDER } from './enums';

const guestSchema = mongoose.Schema({
    name: String,
    country: String,
    phoneNum: String,
    mail: String,
    gender: String, // Gave error { type: String, enum: Object.values(enums.GENDER) },
    room: Number
});

module.exports = mongoose.model('Guest', guestSchema);