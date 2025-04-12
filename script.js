'use strict';
// suppose.
let playerScoreOne = 0;
let playerScoreTwo = 0;

let randomNo = Math.trunc(Math.random() * 6 + 1);

// selecting elements.
const playerOneCurr = document.querySelector('#current--0');
const playerTwoCurr = document.querySelector('#current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const section0El = document.querySelector('.player--0');
const section1El = document.querySelector('.player--1');

// starting coditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// other properties
const scores = [0, 0];
let activePlayer = 0;
let playing = true;
// my theory
// let state = true;
// const playGame = function (state) {
//   if (randomNo !== 1) {
//     if (state === true) {
//       playerScoreOne = +randomNo;
//       playerOneCurr.textContent = playerScoreOne;
//     } else {
//       playerScoreTwo = +randomNo;
//       playerTwoCurr.textContent = playerScoreTwo;
//     }
//   }
//   state = !state;
// };

// const changeDice = function (randomNO) {
//   switch (randomNO) {
//     case 1:
//       dice.src = 'image';
//   }
// };
let currentScore = 0;
rollDice.addEventListener('click', function () {
  // Random No
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // changing dice
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;

    // adding to score
    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      shiftPlayer();
    }
  }
});

holdScore.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20 && activePlayer === 0) {
      playing = !playing;
      diceEl.classList.add('hidden');
      section0El.classList.add('player--winner');
    } else if (scores[activePlayer] >= 20 && activePlayer === 1) {
      playing = !playing;
      diceEl.classList.add('hidden');
      section1El.classList.add('player--winner');
    }
    shiftPlayer();
  }
});

const shiftPlayer = function () {
  section0El.classList.toggle('player--active');
  section1El.classList.toggle('player--active');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

newGame.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  playing = true;
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
  section0El.classList.remove('player--winner');
  section1El.classList.remove('player--winner');
});
