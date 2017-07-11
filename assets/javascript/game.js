$( document ).ready(function() {

	// Sets all the default values for wins, losses, guesses remaining, and an empty guesses variable //
	var wins = 0;
	var losses = 0;
	var guessesRem = 8;
	var guesses = " ";

	// Array containing all the possible choices for the gypsy //
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];



    // Chooses a random number from the alphabet as the number to be guessed //
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	// Logs the random number to the console //
    console.log(computerChoice)


   

    // Resets the game for a loser //
function resetL() {
	computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(computerChoice);
	guessesRem = 8;
	$("span#guesses").text("Your Guesses So Far: ");
	$("span#guessesL").text("Guesses Left: 9");
};

	// Resets the game for a winner //
	function resetW() {
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(computerChoice);
		guessesRem = 9;
		$("span#guesses").text("Your Guesses So Far: ");
		$("span#guessesL").text("Guesses Left: 9");
	};
   	// Adds wins to the user total.
    function winner() {
        wins++;
        alert("You Win!")
        $("span#wins").text("Wins: " + wins);
        resetW();
    };
    // Adds losses to the user total.
    function loser() {
    	losses++;
    	alert("You Lose Sucker!")
    	alert("The Answer Was: " + computerChoice);
    	$("span#losses").text("Losses: " + losses);
    	resetL();
    };



	// Tracks which key the user pressed //
	document.onkeypress = function(event) {
    var userGuess = event.key;

    // Logs the user input to the console //
    console.log(userGuess);

    // Adds the user's guesses into the area next to "Your Guesses So Far:" //
    $("span#guesses").append(" " + userGuess);

    // Visually shows the amount of guesses remaining each time the user clicks a key //
	$("span#guessesL").text("Guesses Left: " + guessesRem);

    
   	// Loop to set parameters for the game //
    for(var i = 0; i < 1; i++) {

    if(userGuess === computerChoice) {
    	winner();
    }
    if(guessesRem === 0) {
        loser();
    }
    if(userGuess != computerChoice) {
        guessesRem--;
    }
  }
};
})
