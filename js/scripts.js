//Business Logic

//Determines turn
var player1Turn = true;
var player2Turn = false;

//Player1
function Player1() {
  this.currentRoll = 0;
  this.turnTotal = 0;
  this.score = 0;
}

Player1.prototype.Roll = function () {
  this.currentRoll = Math.floor(Math.random()*6) + 1;
  if (this.currentRoll === 1) {
    this.turnTotal = 0;
    player1Turn = false;
    player2Turn = true;
  } else {
    this.turnTotal += this.currentRoll;
  }
}

Player1.prototype.Hold = function () {
  this.score = this.score + this.turnTotal;
  if (this.score >= 100) {
    alert("Player 1 Wins!")
    location.reload();
  } else {
    this.turnTotal = 0;
    player1Turn = false;
    player2Turn = true;
  }
}

//Player2
function Player2() {
  this.currentRoll = 0;
  this.turnTotal = 0;
  this.score = 0;
}

Player2.prototype.Roll = function () {
  this.currentRoll = Math.floor(Math.random()*6) + 1;
  if (this.currentRoll === 1) {
    this.turnTotal = 0;
    player2Turn = false;
    player1Turn = true;
  } else {
    this.turnTotal += this.currentRoll;
  }
}

Player2.prototype.Hold = function () {
  this.score = this.score + this.turnTotal;
  if (this.score >= 100) {
    alert("Player 2 Wins")
    location.reload();
  } else {
    this.turnTotal = 0;
    player2Turn = false;
    player1Turn = true;
  }
}
//UI Logic

$(document).ready(function() {
  var newPlayer1 = new Player1();
  var newPlayer2 = new Player2();
  $("#player1-total-score").text(0);
  $("#player2-total-score").text(0);
  $("#user1-dice").click(function() {
      event.preventDefault();
      if (player1Turn === false) {
        alert("Player 2 Turn")
      } else {
        newPlayer1.Roll();
        $("#player1-current-roll").text(newPlayer1.currentRoll);
        $("#player1-turn-total").text(newPlayer1.turnTotal);
      }
  });
  $("#user1-hold").click(function() {
    event.preventDefault();
    if (player1Turn === false) {
      alert("Player 2 Turn")
    } else {
      newPlayer1.Hold();
      $("#player1-current-roll").text("");
      $("#player1-turn-total").text("");
      $("#player1-total-score").text(newPlayer1.score);
    }
  });
  $("#user2-dice").click(function() {
      event.preventDefault();
      if (player2Turn === false) {
        alert("Player 1 Turn")
      } else {
        newPlayer2.Roll();
        $("#player2-current-roll").text(newPlayer2.currentRoll);
        $("#player2-turn-total").text(newPlayer2.turnTotal);
      }
  });
  $("#user2-hold").click(function() {
    event.preventDefault();
    if (player2Turn === false) {
      alert("Player 1 Turn")
    } else {
      newPlayer2.Hold();
      $("#player2-current-roll").text("");
      $("#player2-turn-total").text("");
      $("#player2-total-score").text(newPlayer2.score);
    }
  });
});
