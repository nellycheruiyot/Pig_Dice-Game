//business logic
function Player(playerName, score, turnScore ) {
  this.playerName = playerName;
  this.turnScore = score;
  this.turnTotal = turnScore;
}

Player.prototype.rollDie = function() {
  var roll = Math.floor((Math.random()*6)+1);
  console.log(roll);
  if (roll !==1) {
    this.turnScore += roll;
  }else {
    this.turnScore = 0;
    alert("Your turn is up!")
  }
  return roll;
}

Player.prototype.hold = function() {
  this.score += this.turnScore
  this.turnScore = 0;
}

Player.prototype.anotherTurn = function() {
  this.turnScore = 0;
}

Player.prototype.win = function() {
  if(this.score >= 100) {
    alert("You Win!")
  }
}

Player.prototype.newGame = function() {
  this.turnScore = 0;
  this.score = 0;
}
var Player1, Player2;
//user interface
$(document).ready(function(){
  $(".container-play").hide();

  $("form#game").submit(function(event) {
    event.preventDefault();

    var inputtedPlayer1 = $("input#player1").val();
    var inputtedPlayer2 = $("input#player2").val();

    $(".player1").text(inputtedPlayer1);
    $(".player2").text(inputtedPlayer2);


    Player1 = new Player(inputtedPlayer1, 0, 0)
    $(".container-play").show();
  })
  $("#roll-button1").click(function(event) {
    event.preventDefault
    var rollPlayer1 = Player1.rollDie();
  });
});
