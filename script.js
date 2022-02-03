const displayHoroscope = document.querySelector("#horoscope-container");
const generateButton = document.querySelector("#generate-horoscope");

const horoscopeBeginning = [
  "A mysterious stranger will approach you ",
  "You will wake up ",
  "You will find a most enchanting orb ",
];
const horoscopeMiddle = [
  "and your favorite food ",
  "and, suddenly, your entire family ",
  "and your doppelgänger ",
  "with tidings both fair and foul: The Grand Cosmic Space Cube ",
];
const horoscopeEnd = [
  "will swallow you whole.",
  "will recount in great detail your most embarrassing memory from 3rd grade.",
  "will challenge you to an arm wrestling contest. For eternity.",
];

const randomBeg = Math.floor(Math.random() * horoscopeBeginning.length);
const randomMid = Math.floor(Math.random() * horoscopeMiddle.length);
const randomEnd = Math.floor(Math.random() * horoscopeEnd.length);

const newHoroscope =
  horoscopeBeginning[randomBeg] +
  horoscopeMiddle[randomMid] +
  horoscopeEnd[randomEnd];

const horoscopeAsString = document.createTextNode(newHoroscope);

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

function spinMyWebOfFate() {

  
  // displayHoroscope.appendChild("TEST TEST TEST 3");
  // document.getElementById("#horoscope-container").appendChild("TEST 44444");

  // const newLine = document.createElement("p");
  // var txt = document.createTextNode("TEST TEXT");
  // horoscopeAsString.appendChild(txt);
  // // document.body.appendChild(" ");
  // document.body.appendChild("TEST AGAIN");
  // // document.body.appendChild(displayHoroscope);
  // document.body.appendChild(horoscopeAsString);

  // const newHoroscope =
  //   horoscopeBeginning[randomBeg] +
  //   horoscopeMiddle[randomMid] +
  //   horoscopeEnd[randomEnd];
  console.log(newHoroscope);
  //   displayHoroscale.appendChild(newHoroscope);
}

function myFunction2() {
  var demo = document.createElement("P");
  var txt = document.createTextNode(
    "This is a the example of JavaScript Append method so, it will  print its created child node."
  );
  demo.appendChild(txt);
  document.body.appendChild(demo);
}
