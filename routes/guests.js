const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Guest = require("../models/guest");

// Get All guests
router.get("/", (req, res, next) => {
    Guest.find()
    .then(guests => res.json(guests))
});
// Post new guests
router.post("/", (req, res, next) => {
      const newGuest = new Guest({
        name: req.body.name,
        phoneNum: req.body.phoneNum,
        mail: req.body.mail,
        gender: req.body.gender,
		room: req.body.room
      })
      newGuest.save()
      .then(guest => res.json(guest)); 
});
//Get guest
router.get("/:guestId", getGuest,(req, res, next) => {
    res.json(res.guest);
});
// Get specific Guest
function getGuest(req, res, next){
    let id = req.params.guestId;
    Guest.findById(id)
    .then(guest => {
        if (guest){
            res.guest = guest;
        } else {
            res.json({ message: 'Guest not found' });
            return;
        }
        next();
    })
}
// Patch specific guest
router.patch("/:guestId", (req, res, next) => {
     const id = req.params.guestId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Guest.update({ _id: id }, { $set: updateOps })
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
// Delete specific guest
router.delete("/:guestId", (req, res, next) => {
    const id = req.params.guestId;
    Guest.remove({ _id: id })
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
