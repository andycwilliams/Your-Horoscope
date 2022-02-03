const displayHoroscope = document.querySelector("#horoscope-container");
const generateButton = document.querySelector("#generate-horoscope");
const getSign = document.querySelector("#signs").value;

const horoscopeSubject = [
  "Your third favorite cousin",
  "Some guy",
  "Christy Coombs, your bully from 7th grade,",
  "Your entire family and a few of their pets",
  "Your doppelgänger",
  "You",
  "A mysterious stranger ",
];

const horoscopeBeginning = [
  "will approach you",
  "will wake up",
  "will find a most enchanting orb",
];
const horoscopeMiddle = [
  "will make your favorite food",
  "will bear with tidings both fair and foul: The Grand Cosmic Space Cube",
  "The 2005 principal tour production of Billy Elliot",
];
const horoscopeEnd = [
  "swallow you whole.",
  "with just what they find under the sink",
  "flick pinto beans into your eyelids for all of eternity.",
  "recount in excruciating detail your most embarrassing memory from 3rd grade.",
  "challenge you to an arm wrestling contest. You will lose dozens of times in a row. Then, finally, one time you will feel like it's going to be different. You feel different. Stronger, more capable. Your opponent seems fatigued. Are they giving up? You press the advantage. After half an hour it seems like they're going to yield. Sweat erupts from their every pore. You're also wearing out but gosh darn are you DETERMINED. Then suddenly they SLAM your arm to the other side, spraining it in three places. Everyone is laughing. Your parents are laughing the hardest.",
];

const randomSub = Math.floor(Math.random() * horoscopeSubject.length);
const randomBeg = Math.floor(Math.random() * horoscopeBeginning.length);
const randomMid = Math.floor(Math.random() * horoscopeMiddle.length);
const randomEnd = Math.floor(Math.random() * horoscopeEnd.length);

const newHoroscope = `${getSign.toUpperCase()}: ${
  horoscopeSubject[randomSub]
} ${horoscopeBeginning[randomBeg]} ${horoscopeMiddle[randomMid]} ${
  horoscopeEnd[randomEnd]
}`;

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
