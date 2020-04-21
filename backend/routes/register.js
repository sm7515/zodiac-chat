const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('../db');

const User = mongoose.model('User');

const determineSign = (dob) => {
  const birth = dob.split('-');
  const month = Number(birth[1]);
  const date = Number(birth[2]);
  let sign = '';

  // Aries (Mar 21-Apr 19)
  if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {
    sign = 'Aries';
  }
  // Taurus (Apr 20-May 20)
  else if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {
    sign = 'Taurus';
  }
  // Gemini (May 21-June 20)
  else if ((month === 5 && date >= 21) || (month === 6 && date <= 20)) {
    sign = 'Gemini';
  }
  // Cancer (Jun 21-Jul 22)
  else if ((month === 6 && date >= 21) || (month === 7 && date <= 22)) {
    sign = 'Cancer';
  }
  // Leo (Jul 23-Aug 22)
  else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
    sign = 'Leo';
  }
  // Virgo (Aug 23-Sep 22)
  else if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {
    sign = 'Virgo';
  }
  // Libra (Sep 23-Oct 22)
  else if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
    sign = 'Libra';
  }
  // Scorpio (Oct 23-Nov 21)
  else if ((month === 10 && date >= 23) || (month === 11 && date <= 21)) {
    sign = 'Scorpio';
  }
  // Sagittarius (Nov 22-Dec 21)
  else if ((month === 11 && date >= 22) || (month === 12 && date <= 21)) {
    sign = 'Sagittarius';
  }
  // Capricorn (Dec 22-Jan 19)
  else if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {
    sign = 'Capricorn';
  }
  // Aquarius (Jan 20-Feb 18)
  else if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {
    sign = 'Aquarius';
  }
  // Pisces (Feb 19-Mar 20)
  else if ((month === 2 && date >= 19) || (month === 3 && date <= 20)) {
    sign = 'Pisces';
  }

  return sign;
};

router.post('/', (req, res) => {
  User.find({ username: req.body.name }).then((items) => {
    if (items.length !== 0) {
      console.log('User exists');
      res.status(401).send('User exists.');
    } else {
      bcrypt.hash(req.body.pwd, 10, (err, hash) => {
        if (!err) {
          console.log(req.body.dob);
          const sign = determineSign(req.body.dob);
          const user = new User({
            username: req.body.name,
            dob: req.body.dob,
            hash: hash,
            sign: sign,
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
