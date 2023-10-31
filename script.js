let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest");
let saveGame = document.getElementById("saveGame");
let homeCount = 0;
let guestCount = 0;

function homeOne() {
  homeCount += 1;
  scoreHome.innerText = homeCount;
}

function guestOne() {
  guestCount += 1;
  scoreGuest.innerText = guestCount;
}

function homeTwo() {
  homeCount += 2;
  scoreHome.innerText = homeCount;
}

function guestTwo() {
  guestCount += 2;
  scoreGuest.innerText = guestCount;
}

function homeThree() {
  homeCount += 3;
  scoreHome.innerText = homeCount;
}

function guestThree() {
  guestCount += 3;
  scoreGuest.innerText = guestCount;
}

//display final score and set count to zero
function saving() {
  game = homeCount + " to " + guestCount;
  lastScore.innerText += game;
  homeCount = 0;
  guestCount = 0;
}
