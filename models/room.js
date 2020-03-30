const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomNum: Number,
    floor: Number,
    numOfpeople: Number,
    roomPhone: String,
    isAvailable: Boolean
});

module.exports = mongoose.model('Room', roomSchema);