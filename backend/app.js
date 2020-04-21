const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 8080;

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
  res.header(
    'Access-Control-Allow-Origin',
    'http://linserv1.cims.nyu.edu:23204',
  ); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/user', userRoute);

const server = app.listen(port, () => {
  console.log(`server running on ${port}`);
});

const io = require('socket.io')(server);
let names = [];
io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(names);
  let hasSign = false;
  let index = null;

  //Client sends a new message
  socket.on('new message', function (data) {
    // we tell the client to execute 'new message'
    const text = data[0];
    const user = data[1];
    io.emit('new message', {
      name: user.name,
      img: user.img,
      text: text,
      sign: user.sign,
      timestamp: Date.now(),
    });
  });

  //Client sends a sign request
  socket.on('request sign', function (input) {
    const sign = input[0];
    const name = input[1];
    const img = input[2];
    if (hasSign) return;
    if (names.indexOf(name) == -1) {
      //Store the sign in the socket
      socket.sign = sign;
      socket.name = name;
      socket.img = img;
      names.push(name);
      console.log(names);

      hasSign = true;
      socket.emit('connected', {
        sign: sign,
        name: name,
        img: img,
      });

      //Broadcast connected user message
      io.emit('new message', {
        sign: sign,
        name: name,
        img: img,
        text: `${name} (${sign}) has connected`,
        timestamp: Date.now(),
      });
    }
  });

  //Handle a user disconnect
  socket.on('disconnect', function () {
    if (hasSign) {
      let name;

      names = names.filter((ele) => {
        if (ele !== socket.name) {
          return ele;
        } else {
          name = ele;
        }
      });
      // const name = names.splice(index, 1);
      console.log(name, 'log out');
      console.log(names);

      //Broadcast disconnect message
      io.emit('new message', {
        sign: socket.sign,
        img: socket.img,
        text: `${socket.name} (${socket.sign}) has disconnected`,
        timestamp: Date.now(),
      });
    }
  });
});
