document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

} 












// 	<script type="text/javascript">
	

// 	// Variables
// 	//=============
// 	var wins = 0;

// 	var losses = 0;

// 	var guesses = 0;

// 	var guessesRem = 9;

// 	var randomGuess = Math.round(Math.random() * 26);

// 	$(document).ready(function() {

// 	// This jQuery function reduces the guesses remaining by 1 and increases the total guesses by one when any of the items from the arr is entered.
// 	$("guessesAll").on("keypress", function() {
// 		guesses++;
// 		guessesRem--;
// 	})
// });

// 	// This is to establish the array of potential guesses.
// 	var guessesAll = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

// 	for (var i = 0; i < guessesAll.length; i++);

// 	document.onkeyup = function(event) {

// 		var userInput = event.key;

// 		// This increases the wins if the user guesses correctly
// 		if (userInput === "randomGuess") {
// 			wins++;
// 			alert("You guessed correctly!")
// 		};
		
// 		// This increases the amount of guesses if the user guesses incorrectly and decreases the guesses remaining.
// 		if (userInput != "randomGuess") {
// 			guesses++;
// 			guessesRem--;
// 		};

// 		// This function will increase losses by 1 if the user guesses incorrectly 9 times.
// 		if ((userInput != "randomGuess") * 9 ){
// 			losses++;
// 			alert("Sorry, You Lose!")
// 		};

	
	

	// function makeid() {
  	// var text = "";
  	// var possible = "abcdefghijklmnopqrstuvwxyz";

  	

  	// return text;
	}

	// console.log(makeid());

</script>
