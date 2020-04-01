const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  highestScore: Number,
  character: String,
  createdAt: { type: Date, default: Date.now }
});

const pokemonSchema = new mongoose.Schema({
  name: String,
  image: String
});

mongoose.model("User", userSchema);
mongoose.model("Pokemon", pokemonSchema);

mongoose.connect("dbconfig", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
