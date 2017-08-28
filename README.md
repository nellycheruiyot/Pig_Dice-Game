# Pig Dice Game WebApp

### By **Nelly Cheruiyot**

## Description
This is a web application that allows two users to play a pig dice game. The game rules are as follows:

- Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

	- If the player rolls a 1, they score nothing and it becomes the next player's turn.
	- If the player rolls any other number, it is added to their turn total and the player's turn continues.
	-If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

- The first player to score 100 or more points wins.

For example, for a given turn:
	- Player 1 rolls 5 then 6 and holds. Player 1 turn score = 11 and becomes Player 2's turn.
	- Player 1 rolls 5 then 1. Player 1 turn score is 0 and is forced to hand over the turn to Player 2.
	- Player 1 rolls 1. Player 1 turn score is 0 and is forced to hand over the turn to Player 2.
The game proceeds this way for each turn with each player's score updated after each turn. Once a winner is reached, the players have to restart the game by clicking on the 'New Game' button


## Demo
Here is a working live demo:  https://nellycheruiyot.github.io/Pig_Dice-Game

## Features
- Takes player names input from users
- Uses a JavaScript constructors, prototypes, objects, properties, methods to create a Player object used to track each player's score and turn. Each Player object contains the following properties:
	- playerNumber - used as an identifier for each player
	- playerName
	- rollScore - keeps track of the what the rolls (1,2,3,4,5 or 6) when a player rolls the die
	- turnScore - keeps track of the score for a given turn. A turn consists of one or more rolls until a player holds or rolls a 1.
	- totalScore - keeps track of a player's total game score
	- turn - used to indicate if it is a player's turn. 1 = it is the player's turn, 0 = it is not the player's turn.
	- win_flag - used to indicate if a player is the winner. 1 = player is the winner, 0 = player is not the winner.
- Uses jQuery and DOM manipulation and traversal to control what gets displayed when a player interacts with the web page:
	- Welcome page where the users enter the player names in order to start the game. This page is hidden once the players start the game
	- Playing page where the players play the game. Keeps track of each players scores through all the turns until a winner is determined. Displays the winner and gives the players a 'New Game' button to start a new game.

### Setup/Installation Requirements
Want to set up a copy of this WebApp on your local machine? Great!

- Clone this repo to your desktop
- The project folder contains the following:
	- CSS folder - edit the styles.css file in this folder if you want to modify the look and feel of the WebApp
	- Images folder
	- Scripts folder - this folder contains the JavaScript script code using jQuery. This is where the business (game) logic and user interface logic resides. Edit the Script.js file to modify the logic or add new features.
	- Indext.html file - edit this file to modify the contents of the WebApp

### Bug / Feature Request

If you find a bug (the website didn't function as expected and / or gave undesired results), kindly email the description of the issue and expected results to nellycheruiyot@gmail.com.

If you'd like to request a new function, feel free to email your requests to nellycheruiyot@gmail.com.


## Technologies used

- [jQuery 3.2.1](http://jquery.com/download/) - jQuery simplifies HTML document traversing, event handling, etc for rapid web development.
- [JavaScript objects and methods]


## Support and contact details
Email: nellycheruiyot@gmail.com

### License
*This project is licensed under the terms of the **MIT** license*

Copyright © 2017 **Nelly Cheruiyot**
