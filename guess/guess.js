var input, secret, turns;
var printLabel, redo, guess;

function init(){
	printLabel = document.getElementById("printLabel");
	guess = document.getElementById("guess");
	redo = document.getElementById("redo");
	
	redo.style.display = "none";
	
	turns = 0
	
	printLabel.innerHTML = "Computer is thinking of a number between 1 and 100. ";
	printLabel.innerHTML += "Try to guess my secret, and I will tell you, ";
	printLabel.innerHTML += "Too high, or too low or correct!!";
	
	secret = parseInt(Math.random() * 100);
	document.getElementById("guess").value="";
	input.focus();

}

function check(){
/*
	turns++;
	
	response = "No of Tries: (" + turns + ") ";
	input = parseInt(guess.value);
	if(input < secret){
		response += "<br> Your guess is too Low";
	} else if(input > secret){
		response += "<br> Your guess is too High";
	} else if(input == secret){
		response = "You found me!, in " + turns + " tries";
		redo.style.display = "block";	
	} else{
		response += "Please enter a valid number between 1 and 100";
	}
	
	printLabel.innerHTML = response;

*/

}

