const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  sign: String,
  dob: Date,
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('User', userSchema);

mongoose.connect(
  'mongodb+srv://sijia:123@cluster0-mpgdz.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);
