// GLOBAL VARIABLES
let sum = 0;
let cards = document.getElementById("cards");
// GLOBAL VARIABLES

// LOGIC FUNCTION
function start() {
  if (sum < 21) {
    let card = Math.floor(Math.random() * 11 + 1);
    sum = sum + card;
    let previousText = cards.innerText;
    cards.innerText = previousText + " " + card;
    document.getElementById("sum").innerText = sum;
    if (sum > 21) {
      document.getElementById("winner").innerText = "You Lose";
      document.getElementById(
        "restart"
      ).innerHTML = `<button id="start" class="start" onclick="restart()"><b>RESTART</b></button>`;
    } else if (sum === 21) {
      document.getElementById("winner").innerText =
        "Hurry !!! BlackJack You Won";
      document.getElementById(
        "restart"
      ).innerHTML = `<button id="start" class="start" onclick="restart()"><b>RESTART</b></button>`;
    }
  }
}
// LOGIC FUNCTION

// RESET OR RESTART FUNCTION
function restart() {
  sum = 0;
  cards.innerText = " ";
  document.getElementById("winner").innerHTML = `<i>Want to play a round?</i>`;
  document.getElementById("sum").innerText = " ";
  document.getElementById(
    "restart"
  ).innerHTML = `<button id="start" class="start" onclick="start()"><b>START GAME</b></button>`;
}

// RESET OR RESTART FUNCTION
