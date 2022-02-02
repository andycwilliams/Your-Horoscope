const displayHoroscale = document.querySelector("#horoscope-container");

const horoscopeBeginning = [
  "You will find a mysterious stranger ",
  "You will wake up ",
];
const horoscopeMiddle = [
  "and your favorite food ",
  "and suddenly your entire family ",
];
const horoscopeEnd = [
  "will swallow you whole.",
  "will recount in great detail your most embarrassing memory from 3rd grade.",
];

const generateHoroscope = document.querySelector("#generate-horoscope");

const randomBeg = Math.floor(Math.random() * horoscopeBeginning.length);
const randomMid = Math.floor(Math.random() * horoscopeMiddle.length);
const randomEnd = Math.floor(Math.random() * horoscopeEnd.length);

const newHoroscope =
  horoscopeBeginning[randomBeg] +
  horoscopeMiddle[randomMid] +
  horoscopeEnd[randomEnd];

console.log(newHoroscope);

// ----------------------------------------------------------------

// const colors = ["blue", "yellow", "orange", "red"];
// const randIndex = Math.floor(Math.random() * colors.length);
// console.log(colors[randIndex]);
