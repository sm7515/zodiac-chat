The content below is an example project proposal / requirements document. Replace the text below the lines marked "**TODO**" with details specific to your project. Remove the "TODO" lines.

# Pokemon Run

## Overview

Like the T-Rex game made by Google, Pokemon Run is a mobile game in which users can choose their favorite pokemon and gain points by preventing it from hitting the obstacles.

## Data Model

The application will store Users and Pokemon.

An Example User:

```javascript
{
  username: "KIRACHI",
  hash: // a password hash,
  highestScore: 100,
  character: 'pikachu',
  createdAt: // timestamp
}
```

An Example Pokemon:

```javascript
{
  name: 'pikachu',
  image: // image url or base64,
}
```

## [Link to Commented First Draft Schema](./backend/db.js)

## Wireframes

/game - page for the actual game

![game](./documentation/game.png)

## Site map

Here's the [sitemap](./documentation/sitemap.png)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can choose a pokemon to play
4. as a user, I can play the game and gain points

## Research Topics

- (5 points) Integrate user authentication
  - I'm going to be using passport for user authentication
- (3 points) Perform client side form validation using Formik
- (5 points) React-native.js
  - used React-native.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

## [Link to Initial Main Project File](backend/app.js)

## Annotations / References Used

1. [passport.js authentication docs](http://passportjs.org/docs)
2. [tutorial on react-native.js](https://reactnative.dev/docs/getting-started)
3. [react-native-game-engine](https://github.com/bberak/react-native-game-engine)
