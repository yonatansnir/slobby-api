const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Guest = require("../models/guest");

router.get("/", (req, res, next) => {
    console.log("GET GUEST");
});

router.post("/", (req, res, next) => {
  console.log("POST GUEST")
});

router.get("/:guestId", (req, res, next) => {
    console.log("GET GUEST BY ID")
});

router.patch("/:guestId", (req, res, next) => {
    console.log("PATCH GUEST BY ID")
});

router.delete("/:guestId", (req, res, next) => {
    console.log("DELETE GUEST BY ID")
});

module.exports = router;
