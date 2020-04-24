const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('../db');
let sessionArray = [];

const User = mongoose.model('User');

const checkLoggedIn = (id) => {
  let result = false;
  sessionArray.forEach((ele) => {
    if (ele === id) {
      result = true;
      return;
    }
  });
  return result;
};

router.post('/', (req, res) => {
  console.log('session array: ', sessionArray);
  User.findOne({ username: req.body.name }, (err, user) => {
    if (err) {
      res.status(500).send('database lookup error');
    } else if (!user) {
      console.log("user doesn't exist");
      res.status(401).send("User doesn't exist");
    } else if (checkLoggedIn(user._id + '')) {
      console.log('already logged in.');
      res.status(401).send('Already logged in');
    } else {
      bcrypt.compare(req.body.pwd, user.hash, (err, result) => {
        if (err) {
          res.status(500).send('Internal hash error');
        } else if (result) {
          req.session.user_id = user._id;
          sessionArray.push(req.session.user_id + '');
          console.log('success log in', req.session.user_id);
          res.send({ id: user._id, name: user.username });
        } else {
          res.status(401).send('Wrong password');
        }
      });
    }
  });
});

router.post('/logout', (req, res) => {
  sessionArray = sessionArray.filter((ele) => {
    return ele !== req.body.id;
  });
  console.log('log out ', req.body.id);
  res.send('logout success');
});

module.exports = router;
