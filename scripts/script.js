const displayHoroscope = document.querySelector("#horoscope-container");
const generateButton = document.querySelector("#generate-horoscope");
const dateRange = document.getElementById("dateRange");

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

function handleClick() {
  if (dateRange != 0) {
    const determineSign = document.querySelector("#determineSign");
    const vals = dateRange.value.split("-");
    const month = vals[1];
    const day = vals[2];

    let userSign = "";
    if (month == "01") {
      if (day < 20) userSign = "Capricorn";
      else userSign = "Aquarius";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "02") {
      if (day < 19) userSign = "Aquarius";
      else userSign = "Pisces";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "03") {
      if (day < 21) userSign = "Pisces";
      else userSign = "Aries";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "04") {
      if (day < 20) userSign = "Aries";
      else userSign = "Taurus";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "05") {
      if (day < 21) userSign = "Taurus";
      else userSign = "Gemini";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "06") {
      if (day < 21) userSign = "Gemini";
      else userSign = "Cancer";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "07") {
      if (day < 23) userSign = "Cancer";
      else userSign = "Leo";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "08") {
      if (day < 23) userSign = "Leo";
      else userSign = "Virgo";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "09") {
      if (day < 23) userSign = "Virgo";
      else userSign = "Libra";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "10") {
      if (day < 23) userSign = "Libra";
      else userSign = "Scorpio";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "11") {
      if (day < 22) userSign = "Scorpio";
      else userSign = "Sagittarius";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else if (month == "12") {
      if (day < 22) userSign = "Sagittarius";
      else userSign = "Capricorn";
      console.log(userSign);
      document.querySelector("#signs").value = userSign;
      spinMyWebOfFate(userSign);
    } else {
      spinMyWebOfFate(userSign);
    }
  }
}

function spinMyWebOfFate(userSign) {
  const randomSub = Math.floor(Math.random() * horoscopeSubject.length);
  const randomBeg = Math.floor(Math.random() * horoscopeBeginning.length);
  const randomMid = Math.floor(Math.random() * horoscopeMiddle.length);
  const randomEnd = Math.floor(Math.random() * horoscopeEnd.length);
  const strangeAlbert = document.querySelector("#strangeAlbert");
  const getSign = document.querySelector("#signs").value;
  // const determineSign = document.querySelector("#determineSign");

  const newHoroscope = `${getSign.toUpperCase()}: ${
    horoscopeSubject[randomSub]
  } ${horoscopeBeginning[randomBeg]} ${horoscopeMiddle[randomMid]} ${
    horoscopeEnd[randomEnd]
  }`;

  if (getSign === "default") {
    alert("You need to select your sign!");
  } else {
    displayHoroscope.innerHTML = newHoroscope;

    if (strangeAlbert.style.display === "none") {
      strangeAlbert.style.display = "block";
    }
  }
}

// Randomize whether Starter and Stinger are even added.

// [Money and friendship rarely mix], Virgo. Keep this in mind today if [a friend hits you up for a loan]. [You'd be better off [helping her strategize ways]] to [earn more money]. Much as you like to help the underdog, [a temporary approach often does more harm than good]. [A quick loan] [won't help your friend's] [fundamental problem of] [compulsive spending]. [Offering to pay for] [counseling] would be a [gift of enduring value].
// [You can expect to] [run a lot of errands today], Gemini, [even though you would probably prefer to stay at home]. [You have obligations to] [fulfill for friends and family], and [you can't bear to let them down]. [Try to get everything done as quickly as possible so that] you'll still have [the afternoon free for yourself].
// [Today you could receive] [word of a promotion or exciting new challenge] [at work]. Although this is something you've wanted for a long time, [you may hesitate to accept immediately]. [Could it be because] [your self-confidence is rather low right now,] Leo? Don't let that stop you! This feeling is only temporary, while [the opportunity could develop into] [something lasting]. Don't lose your chance!
// This is unlike you, Libra, but today you're a lean, mean cleaning machine. You get it in your head that this is the day for putting your house in order, and you set about single-handedly doing it. That's way too much cleaning and organizing for one person to do. Why not enlist some help? Bribe your partner or kids, play some loud music, and all of you will finish the tasks in no time.
// You can't help but feel a bit frustrated today, Scorpio. There are places to go, people to see, and you can't seem to get out of the house. Your responsibilities are at home now, and the situation won't change for a while. You can, however, plan some mini-vacations without too much effort. Treat yourself one evening to fantastic take-out food and a sappy old movie. That might be just the thing to lift your spirits.
// You have energy to burn, Cancer, and you intend to use it. Ask friends to join you in the park. Or set up a round-robin tennis match for the afternoon. Enjoy your day outdoors, but take care not to push too hard. If you strain muscles today, it could be weeks before you're fully healed. If you pace yourself and take plenty of water breaks, then you'll enjoy the day with no repercussions.
