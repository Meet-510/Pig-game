// "use strict";

// // selecting element
// let score1 = document.querySelector("#score-1");
// let score2 = document.getElementById("score-2");
// let dice = document.querySelector(".dice");
// let btnnew = document.querySelector(".btn-new");
// let btnroll = document.querySelector(".btn-roll");
// let btnhold = document.querySelector(".btn-hold");
// let cr1 = document.getElementById("current-1");
// let cr2 = document.getElementById("current-2");
// let player1 = document.querySelector(".player-1");
// let player2 = document.querySelector(".player-2");

// // strating conditions
// score1.textContent = 0;
// score2.textContent = 0;
// cr1.textContent =0;
// cr2.textContent=0
// dice.classList.add("hidden");
// let currentScore = 0;
// let activePlayer = 1;
// let score = [0, 0];

// // rollind dice functionality
// btnroll.addEventListener("click", function () {
//   let diceNumber = Math.trunc(Math.random() * 6) + 1;

//   //   display the dice
//   dice.classList.remove("hidden");
//   dice.src = `dice-${diceNumber}.png`;

//   if (diceNumber !== 1) {
//     // add dice to the current score
//     currentScore = currentScore + diceNumber;
//     document.getElementById(`current-${activePlayer}`).textContent =
//       currentScore;
//     // cr1.textContent = currentScore;
//   } else {
//     // switch to next player
//     document.getElementById(`current-${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     if (activePlayer === 1) {
//       activePlayer = 2;
//     } else {
//       activePlayer = 1;
//     }
//     player1.classList.toggle("active-player");
//     player2.classList.toggle("active-player");

// });

// document.querySelector(".btn-hold").addEventListener("click", function () {

//   score[1] = score[1] + currentScore;
//   document.getElementById(`score-${activePlayer}`).textContent =
//     score[activePlayer];

// });

const score1El = document.getElementById("score-1");
const score2El = document.getElementById("score-2");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const current1El = document.getElementById("current-1");
const current2El = document.getElementById("current-2");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

//switching the player

const switchPlayer = () => {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  player1.classList.toggle("active-player");
  player2.classList.toggle("active-player");
};

let scores, currentScore, activePlayer, playing;

const init = () => {
  //starting conditions
  scores = [0, 0, 0];
  currentScore = 0;
  activePlayer = 1;
  playing = true;

  score1El.textContent = 0;
  score2El.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;
  diceEl.classList.add("hidden");
  player1.classList.remove("player-winner");
  player2.classList.remove("player-winner");
  player1.classList.add("active-player");
  player2.classList.remove("active-player");
};
init();

//rolling dice

btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1 generate a random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2 display dice

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // if number is 1 : switch the user
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch the user
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  //add current score to active players score
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];

    // check the current players score is >= 100
    if (scores[activePlayer] >= 100) {
      // if yes finish game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("active-player");
    } else {
      // else switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
