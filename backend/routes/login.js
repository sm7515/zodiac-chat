const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('../db');

const User = mongoose.model('User');

router.post('/', (req, res) => {
  User.findOne({ username: req.body.name }, (err, user) => {
    if (err) {
      res.status(500).send('database lookup error');
    } else if (!user) {
      console.log("user doesn't exist");
      res.status(401).send("user doesn't exist");
    } else {
      bcrypt.compare(req.body.pwd, user.hash, (err, result) => {
        if (err) {
          res.status(500).send('Internal hash error');
        } else if (result) {
          req.session.id = user._id;
          console.log('success', req.session.id);
          res.send(user._id);
        } else {
          res.status(401).send('Wrong password');
        }
      });
    }
  });
});

module.exports = router;
