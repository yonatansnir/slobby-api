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
    .then(room => res.json(room)); 
});
//Get room
router.get("/:roomId", getRoom,(req, res, next) => {
    res.json(res.room);
});
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
}

// Patch specific room
router.patch("/:roomId", (req, res, next) => {
    const id = req.params.roomId;
   const updateOps = {};
   for (const ops of req.body) {
     updateOps[ops.propName] = ops.value;
   }
   Room.update({ _id: id }, { $set: updateOps })
     .exec()
     .then(result => {
       console.log(result);
       res.status(200).json(result);
     })
     .catch(err => {
       console.log(err);
       res.status(500).json({
         error: err
       });
     });   
});
// Delete specific room
router.delete("/:roomId", (req, res, next) => {
   const id = req.params.roomId;
   Room.remove({ _id: id })
     .exec()
     .then(result => {
       res.status(200).json(result);
     })
     .catch(err => {
       console.log(err);
       res.status(500).json({
         error: err
       });
     });
});


module.exports = router;
