'use strict'

/* 
===================
Selecting elements 
=================== 
*/
// players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// scores
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
// current scores
const currentScore0 = document.querySelector('#current--0')
const currentScore1 = document.querySelector('#current--1')
// btns
const btnsNew = document.querySelector('.btn--new');
const btnsRoll = document.querySelector('.btn--roll');
const btnsHold = document.querySelector('.btn--hold');
// dice
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;
diceEl.classList.add('hidden');

let score = [0, 0]
let activePlayer = 0;
let currentScore = 0;

btnsRoll.addEventListener('click', function () {
    // generating random dice
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`
    // display dice 
    diceEl.classList.remove('hidden');
    // check for rolled
    if (dice !== 1) {
        // Add dice to cuurrent score
        currentScore += dice
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
})

btnsHold.addEventListener('click', function () {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
    // Add current score to active player's score
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

})

