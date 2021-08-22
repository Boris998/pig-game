'use strict';

var scores, roundScore, activePlayer, dice; 

scores = [0,0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random()*6)+1;
console.log(dice);

// document.querySelector('#current--'+activePlayer).innerHTML='<em>'+dice+'</em>'
document.querySelector('#current--'+activePlayer).textContent=dice;