const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Room = require("../models/room");
// Get All rooms
router.get("/", (req, res, next) => {
    Room.find()
    .then(rooms => res.json(rooms))
});

// Post new room
router.post("/", (req, res, next) => {
    
     const newRoom = new Room({
        roomNum: req.body.roomNum,
        floor: req.body.floor,
        numOfpeople: req.body.numOfpeople,
        roomPhone: req.body.roomPhone,
        isAvailable: req.body.isAvailable
    })
    newRoom.save()
    .then(room => res.json(room))
    .catch(err => res.json(err));
        })

//Get room
router.get("/:roomId", getRoom,(req, res, next) => {
    res.json(res.room);
});
// Update specific room
router.patch('/:roomId', getRoom, (req, res) => {
    if (req.body.roomNum != ""){
        res.room.floor = req.body.floor;
        res.room.numOfpeople = req.body.numOfpeople;
        res.room.roomPhone = req.body.roomPhone;
        res.room.isAvailable = req.body.isAvailable;
    }
    res.room.save()
    .then(updatedRoom => res.json(updatedRoom))
    .catch(err => res.json(err));
})


// Delete room
router.delete('/:roomId', getRoom, (req, res) => {
    res.room.remove();
})

// Get specific room
function getRoom(req, res, next){
    let id = req.params.roomId;
    Room.findById(id)
    .then(room => {
        if (room){
            res.room = room;
        } else {
            res.json({ message: 'Room not found' });
            return;
        }
        next();
    })
    return;
}
module.exports = router;
