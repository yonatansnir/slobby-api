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
    .then(user => res.json(user))
    .catch(err => res.json(err));
})

// Get User
router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
})


// Delete User
router.delete('/:id', getUser, (req, res) => {
    res.user.remove();
})

// Update User (email and password)
router.patch('/:id', getUser, (req, res) => {
    if (req.body.name != ""){
        res.user.email = req.body.email;
        res.user.password = req.body.password;
    }
    res.user.save()
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.json(err));
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


module.exports = router;