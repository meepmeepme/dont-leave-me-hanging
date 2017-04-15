document.body.addEventListener("keydown", down);
function down(e) {
	console.log(e.key);
	if (e.key == emptyarray[current]) {
		guessworld[current] = e.key;
		emptyworld = guessworld.toString();
		current++;
		document.getElementById("letters-container").innerHTML = emptyworld;
		console.log("correct");
		
	}else{
		console.log("incorrect");
		guessworld.current = "_";
		emptyworld = guessworld.toString();
		document.getElementById("letters-container").innerHTML = emptyworld;
		errors++;
		numerrors = errors.toString();

	}
	if (current == guessworld.length) {
		console.log('success')
		document.getElementById("word-container").innerHTML = "Correct, "+randomword+" is the correct word! You had "+numerrors +" errors.";

	}
}

var athruz = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = ["owl","girrafe"];
var randomword = "";
var emptyarray = [];
var emptyworld = "";
var guessworld = [];
var current = 0;
var errors = 0;
numerrors ="";

function startGame() {
	// body...
	var randomize = 0;
	randomize = Math.floor(Math.random() * 2) + 1 ;
	if (randomize == 1) {
		randomize = 0;
		randomword = words[0];
		emptyarray = words[0].split("");
		guessworld = words[0].split("");
		document.getElementById("guesses-container").innerHTML = "A subspecies of bird which has fixed eyes and whose necks can rotate 270 degree.";

	}else if(randomize == 2){
		randomize = 1;
		randomword = words[1];
		emptyarray = words[1].split("");
		guessworld = words[1].split("");
		document.getElementById("guesses-container").innerHTML = "A Long necked mammal.";

	}
	console.log(randomword);
	console.log(randomize);
	for (var i = 0; i < words[randomize].length; i++) {
			emptyworld = emptyworld + " _";
			document.getElementById("letters-container").innerHTML = emptyworld;
	}
	for (var i = 0; i < words[randomize].length; i++) {
			guessworld[i] = "_";
	}
	console.log(emptyarray);
}
startGame();