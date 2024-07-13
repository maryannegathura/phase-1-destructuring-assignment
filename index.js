const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// helpers.js

// String: uses destructuring to declare five animal sounds
const { moo, neigh, baa, oink, cluck } = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

// String: uses destructuring to declare the four traditional animal names
const { bessie, dolly, babe, little } = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

// String: uses destructuring to declare the three traditional animal colors
const { blackAndWhite, black, pink } = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

// Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Array: uses destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, v] = ["red", "orange", "yellow", "green", "blue", "violet"];

// Array: uses destructuring to declare Indigo using indg
const { indg } = { indg: "indigo" };

// Object: uses destructuring to assign all appropriate variables using the keys as the variable names
const { muppetName, color, song, job, partner } = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

// Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2, song4, nested: { job: nestedJob, partner: nestedPartner } } = {
  song2: "Moving Right Along",
  song4: "I Hope That Something Better Comes Along",
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

// Exporting variables if needed in a module
module.exports = {
  moo, neigh, baa, oink, cluck,
  bessie, dolly, babe, little,
  blackAndWhite, black, pink,
  red, orange, yellow, green, blue, indigo, violet,
  r, o, y, g, b, v,
  indg,
  muppetName, color, song, job, partner,
  song2, song4, nestedJob, nestedPartner
};
