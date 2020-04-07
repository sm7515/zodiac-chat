const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: 'temporary secret',
    cookie: { maxAge: 24 * 60 * 60 * 1000, secure: false },
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
