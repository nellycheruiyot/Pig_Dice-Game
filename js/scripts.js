// function Player(playerName, score, turnScore ) {
//   this.playerName = playerName;
//   this.turnScore = score;
//   this.turnTotal = turnScore;
// }
//
// Player.prototype.rollDie = function() {
//   var rollScore = 0
//   var roll = Math.floor(Math.random()*6+1);
//   if (roll !===1) {
//     this.turnScore += rollScore;
//   }else {
//     rollScore = 0;
//     this.turnScore = 0;
//     alert("Your turn is up!")
//   }
// }
//
// Player.prototype.hold = function() {
//   this.score += this.turnScore
//   this.turnScore = 0;
// }
//
// Player.prototype.anotherTurn = function() {
//   this.turnScore = 0;
// }
//
// Player.prototype.win = function() {
//   if(this.score >= 100) {
//     alert("You Win!")
//   }
// }
//
// Player.prototype.newGame = function() {
//   this.turnScore = 0;
//   this.score = 0;
// }

$(document).ready(function(){
  //$(".row-start").hide();

  $("form#game").submit(function(event) {
    event.preventDefault();

    var player1input = $("input#player1").val();
    var player2input = $("input#player2").val();

    $(".player1").text(player1input);
    $(".player2").text(player2input);


  })
});
