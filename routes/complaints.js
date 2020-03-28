const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Complaint = require("../models/complaint");

router.get("/", (req, res, next) => {
    console.log("GET COMPLAINT");
});

router.post("/", (req, res, next) => {
  console.log("POST COMPLAINT")
});

router.get("/:complaintId", (req, res, next) => {
    console.log("GET COMPLAINT BY ID")
});

router.patch("/:complaintId", (req, res, next) => {
    console.log("PATCH COMPLAINT BY ID")
});

router.delete("/:complaintId", (req, res, next) => {
    console.log("DELETE COMPLAINT BY ID")
});

module.exports = router;
