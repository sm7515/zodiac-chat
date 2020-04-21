const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Sign = mongoose.model('Sign');

router.get('/', async (req, res) => {
  console.log('user: ', req.query);
  let user = {};
  const uid = req.query.id;
  User.findOne({ _id: uid }, async (err, doc) => {
    if (err) {
      console.log('error finding user ', uid);
    } else {
      user = { id: uid, sign: doc.sign, name: doc.username };
      await Sign.findOne({ name: user.sign }, (err, data) => {
        if (err) {
          console.log('error finding sign for user ', user.id);
        } else {
          user.img = data.img;
          console.log('user sent back: ', user);
          res.send(user);
        }
      });
    }
  });
});

module.exports = router;
