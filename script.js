"use strict";

// selecting element
let score1 = document.querySelector("#score-1");
let score2 = document.getElementById("score-2");
let dice = document.querySelector(".dice");
let btnnew = document.querySelector(".btn-new");
let btnroll = document.querySelector(".btn-roll");
let btnhold = document.querySelector(".btn-hold");
let cr1 = document.getElementById("current-1");
let cr2 = document.getElementById("current-2");
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");


// strating conditions
score1.textContent = 0;
score2.textContent = 0;
cr1.textContent =0;
cr2.textContent=0
dice.classList.add("hidden");
let currentScore = 0;
let activePlayer = 1;
let score = [0, 0];


// rollind dice functionality
btnroll.addEventListener("click", function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;

  //   display the dice
  dice.classList.remove("hidden");
  dice.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    // add dice to the current score
    currentScore = currentScore + diceNumber;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
    // cr1.textContent = currentScore;
  } else {
    // switch to next player
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (activePlayer === 1) {
      activePlayer = 2;
    } else {
      activePlayer = 1;
    }
    player1.classList.toggle("active-player");
    player2.classList.toggle("active-player");
    
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  
  score[1] = score[1] + currentScore;
  document.getElementById(`score-${activePlayer}`).textContent =
    score[activePlayer];

});
