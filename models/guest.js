const mongoose = require('mongoose');
const enums = require ('./enums')
//import { GENDER } from './enums';

const guestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    country: String,
    phoneNum: String,
    mail: String,
    gender: { type: String, enum: Object.values(enums.GENDER) },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
});

module.exports = mongoose.model('Guest', guestSchema);