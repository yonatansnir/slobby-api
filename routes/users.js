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
        username: req.body.username,
        password: req.body.password,        
        fullname: req.body.fullname,
        country: req.body.country,
        phoneNum: req.body.phoneNum,
        mail: req.body.mail,
        gender: req.body.gender,
        role: req.body.role
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
    if (req.body.username != ""){
        res.user.password = req.body.password;
        res.user.fullname = req.body.fullname;
        res.user.country = req.body.country;
        res.user.phoneNum = req.body.phoneNum;
        res.user.mail = req.body.mail;
        res.user.gender = req.body.gender;
        res.user.role = req.body.role;      
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