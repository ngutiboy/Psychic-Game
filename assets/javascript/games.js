// The specific letters that the user typed.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting for zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;


// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// function for the number of guesses left
function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}
// function containing the user guess
function userGuessSoFar() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();
// restart function. It is a variable because it will be used multiple times
var restart = function() {
	guessesLeft = 10;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// When the user presses a key, it will run the following function..
document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	userGuessSoFar();
// the user wins if the guess is equal to computer guess
	if (userGuess === computerGuess){
		wins++;
		// Get the innerHTML of the DOM element that has the id "win"
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		// call the restart method
		restart();
	} 
	// The player losses if there are no more guessesleft
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };
