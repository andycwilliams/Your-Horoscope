const displayHoroscope = document.querySelector("#horoscope-container");
const generateButton = document.querySelector("#generate-horoscope");

const horoscopeSubject = [
  "Your third favorite cousin",
  "Some guy",
  "Christy Coombs, your bully from 7th grade,",
  "Your entire family and a few of their pets",
  "Your doppelgänger",
  "You",
  "A mysterious stranger",
  "Richard Nixon III",
];

const horoscopeBeginning = [
  "will approach you with an offer: make a vision board and",
  "will wake up",
  "will find a most enchanting orb",
  "will run into you",
  "will stumble across an aviary",
];
const horoscopeMiddle = [
  "your favorite food",
  "with tidings both fair and foul: The Grand Cosmic Space Cube shall speak to you",
  "and get into a two-day long fistfight",
  "and the concept of spacetime itself",
];
const horoscopeEnd = [
  "ERROR_405: We're sorry, the 7th moon is in retrograde. Please check your fortune again later. We apologize for any inconvenience or summoning portals opened.",
  "before swallowing you whole.",
  "before finally getting roasted by the entire 2005 principal cast of Billy Elliot.",
  "with just whatever is under the sink.",
  "then recount in excruciating detail your most embarrassing memory from 3rd grade.",
  "and then challenge you to an arm wrestling contest. You will lose dozens of times in a row. Then, finally, one time you will feel like it's going to be different. You feel different. Stronger, more capable. Your opponent seems fatigued. Are they giving up? You press the advantage. After half an hour it seems like they're going to yield. Sweat erupts from their every pore. You're also wearing out but gosh darn are you DETERMINED. Then suddenly they SLAM your arm to the other side, spraining it in three places. Everyone is laughing. Your parents are laughing the hardest.",
];

function spinMyWebOfFate() {
  const randomSub = Math.floor(Math.random() * horoscopeSubject.length);
  const randomBeg = Math.floor(Math.random() * horoscopeBeginning.length);
  const randomMid = Math.floor(Math.random() * horoscopeMiddle.length);
  const randomEnd = Math.floor(Math.random() * horoscopeEnd.length);
  const strangeAlbert = document.querySelector("#strangeAlbert");
  const getSign = document.querySelector("#signs").value;

  const newHoroscope = `${getSign.toUpperCase()}: ${
    horoscopeSubject[randomSub]
  } ${horoscopeBeginning[randomBeg]} ${horoscopeMiddle[randomMid]} ${
    horoscopeEnd[randomEnd]
  }`;

  displayHoroscope.innerHTML = newHoroscope;

  if (strangeAlbert.style.display === "none") {
    strangeAlbert.style.display = "block";
  }
}

// ----------------------------------------------------------------

/* <div id="first" style="height:25px; width:25px; display:none;">
  <img src="" />
</div>; */

// const myImage = function myImage(img) {
//   const sheldon = document.getElementById("sheldon");
//   sheldon.innerHTML =
//     '<img src="./assets/' +
//     img +
//     '" id="{}Icon" alt="{} symbol" width="25" height="25"/>';
// };

// const colors = ["blue", "yellow", "orange", "red"];
// const randIndex = Math.floor(Math.random() * colors.length);
// console.log(colors[randIndex]);

// function myFunction() {
//   var demo = document.createElement("P");
//   var txt = document.createTextNode(
//     "This is a the example of JavaScript Append method so, it will  print its created child node."
//   );
//   demo.appendChild(txt);
//   document.body.appendChild(demo);
// }

// switch (getSign) {
//   case "Aries":
//     console.log(getSign);
//     break;
//   case "Taurus":
//     console.log(getSign);
//     break;
//   case "Gemini":
//     console.log(getSign);
//     break;
//   case "Cancer":
//     console.log(getSign);
//     break;
//   case "Leo":
//     console.log(getSign);
//     break;
//   case "Virgo":
//     console.log(getSign);
//     break;
//   case "Libra":
//     console.log(getSign);
//     break;
//   case "Scorpio":
//     console.log(getSign);
//     break;
//   case "Sagittarius":
//     console.log(getSign);
//     break;
//   case "Capricorn":
//     console.log(getSign);
//     break;
//   case "Aquarius":
//     console.log(getSign);
//     break;
//   case "Pisces":
//     console.log(getSign);
//     break;
//   default:
//     console.log(`Sorry, the crystals state that ${getSign} is not a sign.`);
// }

// const createIcon = document.createElement("img");
// // createIcon.innerHTML = `<img src="./assets/${getSign}Icon.png" id="${getSign}Icon" alt="${getSign} symbol" width="25" height="25">`;
// console.log(createIcon);
// createIcon.src = `./assets/${getSign}Icon.png`;
// createIcon.alt = `${getSign} symbol`;
// createIcon.style.width = "25px";
// createIcon.style.height = "25px";

// document.body.appendChild(createIcon);
// console.log(createIcon);

// // const img = document.createElement("img");
// // img.src = "./assets/VirgoIcon.png";
// // document.body.appendChild(img);

// "Aries": 3/21-4/19
// "Taurus": 4/20-5/20
// "Gemini": 5/21-6/21
// "Cancer": 6/22-7/22
// "Leo": 7/23-8/22
// "Virgo": 8/23-9/22
// "Libra": 9/23-10/22
// "Scorpio": 10/23-11/22
// "Sagittarius": 11/23-12/21
// "Capricorn": 12/22-1/19
// "Aquarius": 1/20-2/18
// "Pisces": 2/19-3/20
