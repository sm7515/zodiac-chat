# Zodiac Chat

## Overview

Zodiac Chat is an online chat room that allows users to chat with people of different zodiac signs.

## Run

```javascript
cd backend
npm install
npm start

cd frontend
npm install
npm start
```

## Data Model

The application will store Users and Zodiac Signs.

An Example User:

```javascript
{
  username: "sijia",
  dob: // a Date object for date of birth,
  hash: // a password hash,
  sign: 'Leo',
  createdAt: // timestamp
}
```

An Example Sign:

```javascript
{
  name: 'Leo',
  img: // image url for this specific sign,
}
```

## [Link to Commented First Draft Schema](./backend/db.js)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can send messages to other users
4. as a user, I can view the chat from other users
5. as a user, I can respond to the messages I receive
6. as a user, I can send emojis and gits during chat

## Research Topics

- (5 points) Socket-io
  - I'm going use socket-io for building this real time chat app
- (3 points) Redux
  - I'm going to use Redux and learn how it works with React.js
- (5 points) React.js
  - I'm going to use React.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

## [Link to Initial Main Project File](backend/app.js)

## Annotations / References Used

1. [socket.io](https://socket.io/get-started/chat/)
2. [React.js](https://reactjs.org/tutorial/tutorial.html)
3. [React Redux](https://react-redux.js.org/introduction/quick-start)
