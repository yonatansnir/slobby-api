const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Worker = require("../models/worker.js");

router.get("/", (req, res, next) => {
    console.log("GET Workers");
    Worker.find()
    .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", (req, res, next) => {
  console.log("POST WORKER");
  const worker = new Worker({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    country: req.body.country,
    phoneNum: req.body.phoneNum,
    mail: req.body.mail,
    gender: req.body.gender,
    role: req.body.role
  });
  worker
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /workers",
        createdWorker: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:workerId", (req, res, next) => {
    console.log("GET WORKER BY ID")
    const id = req.params.workerId;
  Worker.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// Delete worker
router.delete('/:workerId', getWorker, (req, res) => {
  res.worker.remove();
})
// Update worker 
router.patch('/:workerId', getWorker, (req, res) => {
  if (req.body.name != ""){
      res.worker.country = req.body.country;
      res.worker.phoneNum = req.body.phoneNum;
      res.worker.mail = req.body.mail;
      res.worker.gender = req.body.gender;
      res.worker.role = req.body.role;
  }
  res.worker.save()
  .then(updatedWorker => res.json(updatedWorker))
  .catch(err => res.json(err));
})
// Get specific worker
function getWorker(req, res, next){
  let id = req.params.workerId;
  Worker.findById(id)
  .then(worker => {
      if (worker){
          res.worker = worker;
      } else {
          res.json({ message: 'worker not found' });
          return;
      }
      next();
  })
  return;
}

/*router.patch("/:workerId", (req, res, next) => {
    console.log("PATCH WORKER BY ID")
    const id = req.params.workerId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Worker.update({ _id: id }, { $set: updateOps })
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

router.delete("/:workerId", (req, res, next) => {
    console.log("DELETE WORKER BY ID")
    const id = req.params.workerId;
  Worker.remove({ _id: id })
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
});*/
module.exports = router;
