const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('../db');

const User = mongoose.model('User');

router.post('/', (req, res) => {
  User.find({ username: req.body.name }).then((items) => {
    if (items.length !== 0) {
      console.log('User exists');
      res.status(401).send('User exists.');
    } else {
      bcrypt.hash(req.body.pwd, 10, (err, hash) => {
        if (!err) {
          const user = new User({
            username: req.body.name,
            dob: req.body.dob,
            hash: hash,
          });
          user.save((err) => {
            if (err) {
              console.log(err);
              res.status(500).send('unable to save user');
            } else {
              console.log('save new user OK');
              res.status(200).send('success');
            }
          });
        }
      });
    }
  });
});

module.exports = router;
