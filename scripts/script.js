const horoscopeStarter = [
  "This is so unlike you. I mean, really.",
  "You're going to wake up to a bunch of stuff and then go back to sleep.",
  "Bro you aren't going to believe this...",
];
const horoscopeSubject = [
  "Your third favorite cousin",
  "Some guy",
  "Christy Coombs, your bully from 7th grade,",
  "Your entire family and a few of their pets",
  "Your doppelgänger",
  "You",
  "A mysterious stranger",
  "Richard Nixon III",
  "HE",
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
const horoscopeStinger = ["Ba'hee Priss Dimmie!"];

const getZodiacSign = () => {
  const userSign = document.querySelector("#sign-selector").value;
  // const displayHoroscope2 = document.querySelector(
  //   "#generate-horoscope-button"
  // ).value;
 const selectedDate = document.querySelector('#birthday-selector');


  console.log(userSign);
  // console.log(displayHoroscope2);

  spinMyWebOfFate();
};

const spinMyWebOfFate = () => {
  const randomSub = Math.floor(Math.random() * horoscopeSubject.length);
  const randomBeg = Math.floor(Math.random() * horoscopeBeginning.length);
  const randomMid = Math.floor(Math.random() * horoscopeMiddle.length);
  const randomEnd = Math.floor(Math.random() * horoscopeEnd.length);
  const strangeAlbert = document.querySelector("#peculiar-albert");
  const getSign = document.querySelector("#sign-selector").value;

  const newHoroscope = `${getSign.toUpperCase()}: ${
    horoscopeSubject[randomSub]
  } ${horoscopeBeginning[randomBeg]} ${horoscopeMiddle[randomMid]} ${
    horoscopeEnd[randomEnd]
  }`;

  if (getSign === "default") {
    alert("You need to select your sign!");
  } else {
    document.querySelector("#horoscope-container").innerHTML = newHoroscope;

    if (strangeAlbert.style.display === "none") {
      strangeAlbert.style.display = "block";
      setTimeout(() => {
        strangeAlbert.style.display === "block";
      }, 5000);
    }
  }
};
