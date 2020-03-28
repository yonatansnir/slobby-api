const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Room = require("../models/room");

router.get("/", (req, res, next) => {
    console.log("GET ROOM");
});

router.post("/", (req, res, next) => {
  console.log("POST ROOM")
});

router.get("/:roomId", (req, res, next) => {
    console.log("GET ROOM BY ID")
});

router.patch("/:roomId", (req, res, next) => {
    console.log("PATCH ROOM BY ID")
});

router.delete("/:roomId", (req, res, next) => {
    console.log("DELETE ROOM BY ID")
});

module.exports = router;
