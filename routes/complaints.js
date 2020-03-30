const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Complaint = require("../models/complaint");

// Get All complaints
router.get("/", (req, res, next) => {
    Complaint.find()
    .then(complaints => res.json(complaints))
});
// Post new complaint
router.post("/", (req, res, next) => {
      const newComplaint = new Complaint({
        subject: req.body.subject,
        description: req.body.description,
        complainantID: req.body.complainantID,
        complaintStatus: req.body.complaintStatus
      })
      newComplaint.save()
      .then(complaint => res.json(complaint)); 
});
// Get Complaint
router.get("/:complaintId", getComplaint,(req, res, next) => {
    res.json(res.complaint);
});
// Get specific complaint
function getComplaint(req, res, next){
    let id = req.params.complaintId;
    Complaint.findById(id)
    .then(complaint => {
        if (complaint){
            res.complaint = complaint;
        } else {
            res.json({ message: 'Complaint not found' });
            return;
        }
        next();
    })
}
// Patch specific complaint
router.patch("/:complaintId", (req, res, next) => {
    const id = req.params.complaintId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Complaint.update({ _id: id }, { $set: updateOps })
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
// Delete specific complaint
router.delete("/:complaintId", (req, res, next) => {
    const id = req.params.complaintId;
    Complaint.remove({ _id: id })
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
