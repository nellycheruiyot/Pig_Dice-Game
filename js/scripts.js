//business logic
function Player(playerNumber, playerName) {
  this.playerNumber=playerNumber;
  this.playerName = playerName;
  this.rollScore = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.turn = 1;
  this.win_flag = 0;
}

Player.prototype.rollDie = function() {
  var roll = Math.floor((Math.random()*6)+1);
  //console.log(roll);
  if (winner_flag == 1) {
    if (this.win_flag == 1) {
      alert("You already won! Please start a new game.");
    }else if (this.playerNumber==1){
      alert(player_2.playerName + " already won! Please start a new game.");
    }else {
      alert(player_1.playerName + " already won! Please start a new game.");
    }
  }else if (roll !== 1 && this.turn == 1) {
    this.rollScore = roll;
    this.turnScore += roll;
  }else if (roll == 1 && this.turn == 1) {
    this.rollScore = roll;
    this.turnScore = 0;
    changeTurnFrom(this.playerName);
    alert("Your turn is up!");
  }else {
    alert("Please wait for your turn!");
  }
  //return roll;
}

Player.prototype.hold = function() {
    this.totalScore += this.turnScore;
    this.turnScore = 0;
}

var changeTurnFrom = function(playerNm) {
  if(playerNm == player_1.playerName) {
    player_1.turn=0;
    player_2.turn=1;
  }
  else{
    player_2.turn=0;
    player_1.turn=1;
  }
}

Player.prototype.checkWin = function() {
  if (winner_flag == 1) {
    if (this.win_flag == 1) {
      alert("You already won! Please start a new game.");
    }else if (this.playerNumber==1){
      alert(player_2.playerName + " already won! Please start a new game.");
    }else {
      alert(player_1.playerName + " already won! Please start a new game.");
    }
  }else if (this.totalScore >= 100) {
      alert("You won! Please start a new game.");
      $(".winner").text(this.playerName);
      player_1.turn=0;
      player_2.turn=0;
      winner_flag=1;
      this.win_flag=1;
  }else if (this.turn==1) {
    alert("Your turn is up! Please pass the mouse to the other player.");
  }else {
    this.turnScore=0;
    alert("Please wait for your turn!");
  }
}

var newGame = function() {
  player_1.playerName="";
  player_1.rollScore=0;
  player_1.turnScore=0;
  player_1.totalScore=0;
  player1.turn=0;
  player1.win_flag=0;
  player_2.playerName="";
  player_2.rollScore=0;
  player_2.turnScore=0;
  player_2.totalScore=0;
  player_2.turn=0;
  player2.win_flag=0;
  winner_flag=0;
}

var player_1, player_2, player1Input, player2Input, winner_flag=0;

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


    player_1 = new Player(1,player1Input);
    player_2 = new Player(2,player2Input);
  });

  $("#roll-button1").click(function(event) {
    event.preventDefault
    player_1.rollDie();
    $("#score1").text(player_1.rollScore);
    $(".turnScore1").text(player_1.turnScore);
    $(".totalScore1").text(player_1.totalScore);
  });

  $("#hold-button1").click(function(event) {
    event.preventDefault
    $(".turnScore1").text(player_1.turnScore);
    player_1.hold();
    $(".totalScore1").text(player_1.totalScore);
    player_1.checkWin();
    changeTurnFrom(player_1.playerName);
    /*if (player_1.totalScore >= 10) {
      alert(player_1.playerName + " won! Please start a new game.");
      $(".winner").text(player_1.playerName);
      $("#roll-button1").hide();
      $("#hold-button1").hide();
      $("#roll-button2").hide();
      $("#hold-button2").hide();
    }else {
    alert("Your turn is up! Please pass the mouse to " + player_2.playerName);
      /*$("#roll-button1").hide();
      $("#hold-button1").hide();
      $("#roll-button2").show();
      $("#hold-button2").show();
    }*/
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
    $(".turnScore2").text(player_2.turnScore);
    player_2.hold();
    $(".totalScore2").text(player_2.totalScore);
    player_2.checkWin();
    changeTurnFrom(player_2.playerName);
    /*if (player_2.totalScore >= 10) {
      alert(player_2.playerName + " won! Please start a new game.");
      $(".winner").text(player_2.playerName);
      $("#roll-button1").hide();
      $("#hold-button1").hide();
      $("#roll-button2").hide();
      $("#hold-button2").hide();
    }else {
    alert("Your turn is up! Please pass the mouse to " + player_1.playerName);
      /*$("#roll-button1").show();
      $("#hold-button1").show();
      $("#roll-button2").hide();
      $("#hold-button2").hide();
    }*/
  });

  $("#new-game").click(function(event) {
    event.preventDefault
    newGame();
    /*player_1.playerName="";
    player_1.rollScore=0;
    player_1.turnScore=0;
    player_1.totalScore=0;
    player_2.playerName="";
    player_2.rollScore=0;
    player_2.turnScore=0;
    player_2.totalScore=0;*/
    $("input#player1").val("");
    $("input#player2").val("");
    $(".container-play").hide();
    $(".row-start").show();
    $("#score1").empty();
    $(".turnScore1").empty();
    $(".totalScore1").empty();
    $("#score2").empty();
    $(".turnScore2").empty();
    $(".totalScore2").empty();
    $(".winner").empty();
  });

});
