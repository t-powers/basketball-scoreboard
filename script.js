let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest");
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
