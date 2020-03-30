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
}

module.exports = router;