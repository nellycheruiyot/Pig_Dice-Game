//business logic
function Player(playerName) {
  this.playerName = playerName;
  this.rollScore = 0;
  this.turnScore = 0;
  this.totalScore = 0;
}

Player.prototype.rollDie = function() {
  var roll = Math.floor((Math.random()*6)+1);
  //console.log(roll);
  this.rollScore = roll;
  if (roll !==1) {
    this.turnScore += roll;
  }else {
    this.turnScore = 0;
    alert("Your turn is up!")
  }
  return roll;
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore
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
var player_1, player_2, player1Input, player2Input;
//user interface
$(document).ready(function(){
  $(".container-play").hide();

  $("form#game").submit(function(event) {
    event.preventDefault();

    player1Input = $("input#player1").val();
    player2Input = $("input#player2").val();

    $(".player1").text(player1Input);
    $(".player2").text(player2Input);

    $(".row-start").hide();
    $(".container-play").show();


    player_1 = new Player(player1Input);
    player_2 = new Player(player2Input);
  })

  $("#roll-button1").click(function(event) {
    event.preventDefault
    player_1.rollDie();
    $("#score1").text(player_1.rollScore);
    $(".turnScore1").text(player_1.turnScore);
    $(".totalScore1").text(player_1.totalScore);
  });

  $("#hold-button1").click(function(event) {
    event.preventDefault
    player_1.hold();
    $(".totalScore1").text(player_1.totalScore);
    if (player_1.totalScore >= 10) {
      alert(player_1.playerName + " won! Please start a new game.");
      $(".winner").text(player_1.playerName);
      $("#roll-button1").hide();
      $("#hold-button1").hide();
      $("#roll-button2").hide();
      $("#hold-button2").hide();
    }else {
      alert("Your turn is up! Please pass the mouse to " + player_2.playerName);
      $("#roll-button1").hide();
      $("#hold-button1").hide();
      $("#roll-button2").show();
      $("#hold-button2").show();
    }
  });

  $("#roll-button2").click(function(event) {
    event.preventDefault
    player_2.rollDie();
    $("#score2").text(player_2.rollScore);
    $(".turnScore2").text(player_2.turnScore);
    $(".totalScore2").text(player_2.totalScore);
  });

  $("#hold-button2").click(function(event) {
    event.preventDefault
    player_2.hold();
    $(".totalScore2").text(player_2.totalScore);
    if (player_2.totalScore >= 10) {
      alert(player_2.playerName + " won! Please start a new game.");
      $(".winner").text(player_2.playerName);
      $("#roll-button1").hide();
      $("#hold-button1").hide();
      $("#roll-button2").hide();
      $("#hold-button2").hide();
    }else {
      alert("Your turn is up! Please pass the mouse to " + player_1.playerName);
      $("#roll-button1").show();
      $("#hold-button1").show();
      $("#roll-button2").hide();
      $("#hold-button2").hide();
    }
  });


    $("#new-game").click(function(event) {
      event.preventDefault
      player_1.playerName="";
      player_1.rollScore=0;
      player_1.turnScore=0;
      player_1.totalScore=0;
      player_2.playerName="";
      player_2.rollScore=0;
      player_2.turnScore=0;
      player_2.totalScore=0;
      $(".container-play").hide();
      $(".row-start").show();

    });



});
