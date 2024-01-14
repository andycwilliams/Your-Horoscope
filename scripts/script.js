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

// Function to determine where the input came from

const determineInputSource = () => {
  const signInput = document.querySelector("#sign-selector").value;
  const dateInput = document.querySelector("#birth-date-selector").valueAsDate;

  if (dateInput && signInput !== "default") {
    console.log("Both Sign and Birth Date selected");
    result = getSignFromBirthDate(dateInput.toString());
  } else if (dateInput) {
    console.log("Only Birth Date selected");
    result = getSignFromBirthDate(dateInput.toString());
  } else if (signInput !== "default") {
    console.log("Only Sign selected");
    result = spinMyWebOfFate(signInput);
  } else {
    console.log("NEITHER, OR ERROR");
    result = null;
  }
};

// Function to derive Zodiac sign from the date selector

const getSignFromBirthDate = (dateInput) => {
  const dateObject = new Date(dateInput);
  const month = dateObject.toLocaleString("en-US", { month: "long" });
  const day = dateObject.getDate();

  let userSign = "";

  if (month == "January") {
    if (day < 20) userSign = "Capricorn";
    else userSign = "Aquarius";
  } else if (month == "February") {
    if (day < 19) userSign = "Aquarius";
    else userSign = "Pisces";
  } else if (month == "March") {
    if (day < 21) userSign = "Pisces";
    else userSign = "Aries";
  } else if (month == "April") {
    if (day < 20) userSign = "Aries";
    else userSign = "Taurus";
  } else if (month == "May") {
    if (day < 21) userSign = "Taurus";
    else userSign = "Gemini";
  } else if (month == "June") {
    if (day < 21) userSign = "Gemini";
    else userSign = "Cancer";
  } else if (month == "July") {
    if (day < 23) userSign = "Cancer";
    else userSign = "Leo";
  } else if (month == "August") {
    if (day < 23) userSign = "Leo";
    else userSign = "Virgo";
  } else if (month == "September") {
    if (day < 23) userSign = "Virgo";
    else userSign = "Libra";
  } else if (month == "October") {
    if (day < 23) userSign = "Libra";
    else userSign = "Scorpio";
  } else if (month == "November") {
    if (day < 22) userSign = "Scorpio";
    else userSign = "Sagittarius";
  } else if (month == "December") {
    if (day < 22) userSign = "Sagittarius";
    else userSign = "Capricorn";
  } else {
    console.log("Something else happened, I guess");
  }

  spinMyWebOfFate(userSign);
};

// Function to call upon the heavens and deliver their message

const spinMyWebOfFate = (getSign) => {
  const randomSub = Math.floor(Math.random() * horoscopeSubject.length);
  const randomBeg = Math.floor(Math.random() * horoscopeBeginning.length);
  const randomMid = Math.floor(Math.random() * horoscopeMiddle.length);
  const randomEnd = Math.floor(Math.random() * horoscopeEnd.length);
  const strangeAlbert = document.querySelector("#peculiar-albert");

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
