const displayHoroscope = document.querySelector("#horoscope-container");
const generateButton = document.querySelector("#generate-horoscope");
const getSign = document.querySelector("#signs").value;

const horoscopeBeginning = [
  "A mysterious stranger will approach you",
  "You will wake up",
  "You will find a most enchanting orb",
  "Your third favorite cousin",
];
const horoscopeMiddle = [
  "and your favorite food",
  "and, suddenly, your entire family",
  "and your doppelgänger",
  "with tidings both fair and foul: The Grand Cosmic Space Cube",
];
const horoscopeEnd = [
  "will swallow you whole.",
  "will recount in great detail your most embarrassing memory from 3rd grade.",
  "will challenge you to an arm wrestling contest. You will lose dozens of times in a row. Then, finally, one time you will feel like it's going to be different. You feel different. Stronger, more capable. Your opponent seems fatigued. Are they giving up? You press the advantage. After half an hour it seems like they're going to yield. Sweat erupts from their every pore. You're also wearing out but gosh darn are you DETERMINED. Then suddenly they SLAM your arm to the other side, spraining it in three places. Everyone is laughing. Your parents are laughing the hardest.",
];

const randomBeg = Math.floor(Math.random() * horoscopeBeginning.length);
const randomMid = Math.floor(Math.random() * horoscopeMiddle.length);
const randomEnd = Math.floor(Math.random() * horoscopeEnd.length);

const newHoroscope = `${getSign.toUpperCase()}: ${
  horoscopeBeginning[randomBeg]
} ${horoscopeMiddle[randomMid]} ${horoscopeEnd[randomEnd]}`;

const horoscopeAsString = document.createTextNode(newHoroscope);

function spinMyWebOfFate() {
  // console.log(getSign);
  displayHoroscope.innerText = newHoroscope;
  // console.log(newHoroscope);
}

// ----------------------------------------------------------------

// const colors = ["blue", "yellow", "orange", "red"];
// const randIndex = Math.floor(Math.random() * colors.length);
// console.log(colors[randIndex]);

function myFunction() {
  var demo = document.createElement("P");
  var txt = document.createTextNode(
    "This is a the example of JavaScript Append method so, it will  print its created child node."
  );
  demo.appendChild(txt);
  document.body.appendChild(demo);
}

// const newHoroscope =
//   getSign +
//   horoscopeBeginning[randomBeg] +
//   horoscopeMiddle[randomMid] +
//   horoscopeEnd[randomEnd];
