const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  sign: String,
  dob: Date,
  createdAt: { type: Date, default: Date.now },
});

const signSchema = new mongoose.Schema({
  name: String,
  img: String,
});

mongoose.model('User', userSchema);
mongoose.model('Sign', signSchema);

function saveSignScript() {
  const Sign = mongoose.model('Sign');

  for (let i = 0; i < 12; i++) {
    let sign = new Sign();
    if (i === 0) {
      sign.name = 'Aries';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_1-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Aries');
        }
      });
    } else if (i === 1) {
      sign.name = 'Taurus';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_2-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Taurus');
        }
      });
    } else if (i === 2) {
      sign.name = 'Gemini';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_9-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Gemini');
        }
      });
    } else if (i === 3) {
      sign.name = 'Cancer';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_4-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Cancer');
        }
      });
    } else if (i === 4) {
      sign.name = 'Leo';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_5-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Leo');
        }
      });
    } else if (i === 5) {
      sign.name = 'Virgo';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_6-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Virgo');
        }
      });
    } else if (i === 6) {
      sign.name = 'Libra';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_7-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Libra');
        }
      });
    } else if (i === 7) {
      sign.name = 'Scorpio';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_8-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Scorpio');
        }
      });
    } else if (i === 8) {
      sign.name = 'Sagittarius';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_12-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Sagittarius');
        }
      });
    } else if (i === 9) {
      sign.name = 'Capricorn';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_11-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Capricorn');
        }
      });
    } else if (i === 10) {
      sign.name = 'Aquarius';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_10-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Aquarius');
        }
      });
    } else if (i === 11) {
      sign.name = 'Pisces';
      sign.img =
        'https://cdn0.iconfinder.com/data/icons/zodiac-signs-14/100/Artboard_9-512.png';
      sign.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('save Pisces');
        }
      });
    }
  }
}

mongoose.connect(
  'mongodb+srv://sijia:123@cluster0-mpgdz.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      //trying to get collection names
      mongoose.connection.db.listCollections().toArray(function (err, names) {
        if (names.length === 1) {
          saveSignScript();
        }
      });
    }
  },
);
