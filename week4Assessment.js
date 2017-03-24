//*******Tools*******


//dialogue system
var userInput = require('readline');
var userPrompt = userInput.createInterface(process.stdin, process.stdout);

/* User Question Code...

userPrompt.question("", function(entry) {

});

*/

//sleep function
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
		break;
		}
    }
};

//wipe wipe wipe the screen
var wipeScreen = function () {
	return process.stdout.write('\033c');
};

//*******Constructors*******

var penguin = function(name, gender, type) {
	this.name = name;
	this.gender = gender;
	this.type = type;
}



//*******Variables*******

var userName;
var pebbleCount;
var pebbleCost;


//*******Functions*******

function mainMenu() {
	wipeScreen();
	console.log("");
	userPrompt.question("", function(input) {
		if (input == "1") {
			//math time!
		} else if (input == "2") {
			//do a trick
		} else if (input == "0") {
			//end game
			process.exit();
		}
	});
}

function penguinMaker() {
	wipeScreen();
	sleep(500);
	console.log("I see you have a penguin with you, "+userName+"! What's their name?");
	userPrompt.question("", function(name) {
		console.log("Are they a boy or a girl?");
		userPrompt.question("", function(gender) {
			console.log("What kind of penguin are they?");
			userPrompt.question("", function(type) {
				mainMenu();
			});
		});
	});
}

function playerName() {
	console.log("Hello there! What's your name?")
	userPrompt.question("", function(entry) {
		userName = entry;
		penguinMaker();
	});
}






//*******Runners********

playerName();
