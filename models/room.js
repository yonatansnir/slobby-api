const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    roomNum: Number,
    floor: Number,
    numOfpeople: Number,
    isAvailable: Boolean
});

module.exports = mongoose.model('Room', roomSchema);