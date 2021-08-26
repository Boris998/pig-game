var scores, roundScore, activePlayer, gamePlayin;

init();

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (gamePlayin) {
    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    if (dice !== 1) {
      //calc score
      roundScore += dice;
      document.querySelector("#current--" + activePlayer).textContent =
        roundScore;
    } else {
      //switch
      nextPlayer();
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (gamePlayin) {
    //add current score to global
    scores[activePlayer] += roundScore;

    // update ui
    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    //check if some player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector("#name--" + activePlayer).textContent = "winner!!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--active");
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      gamePlayin = false;
    } else {
      nextPlayer();
    }
  }
  //switch
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

document.querySelector(".btn--new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlayin=true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.getElementById("name--0").textContent = "player 1";
  document.getElementById("name--1").textContent = "player 2";
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--1").classList.add("player--active");
}
