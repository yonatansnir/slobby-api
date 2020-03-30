const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Get All users
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
});

// Post new user
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    newUser.save()
    .then(user => res.json(user));
})

// Get User
router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
})


// Delete User
router.delete('/:id', getUser, (req, res) => {
    res.user.remove();
})

// Get specific user
function getUser(req, res, next){
    let id = req.params.id;
    User.findById(id)
    .then(user => {
        if (user){
            res.user = user;
        } else {
            res.json({ message: 'User not found' });
            return;
        }
        next();
    })
    return;
}
// // Patch specific user
// router.patch("/:id", (req, res, next) => {
//     const id = req.params.id;
//    const updateOps = {};
//    for (const ops of req.body) {
//      updateOps[ops.propName] = ops.value;
//    }
//    User.update({ _id: id }, { $set: updateOps })
//      .exec()
//      .then(result => {
//        console.log(result);
//        res.status(200).json(result);
//      })
//      .catch(err => {
//        console.log(err);
//        res.status(500).json({
//          error: err
//        });
//      });   
// });
// // Delete specific user
// router.delete("/:id", (req, res, next) => {
//    const id = req.params.id;
//    User.remove({ _id: id })
//      .exec()
//      .then(result => {
//        res.status(200).json(result);
//      })
//      .catch(err => {
//        console.log(err);
//        res.status(500).json({
//          error: err
//        });
//      });
// });
module.exports = router;