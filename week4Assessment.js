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
var pebbleCount = 20;
var pebbleCost = 20;
var userPenguin

//*******Functions*******

function mainMenu() {
	wipeScreen();
	console.log("Alright, what would you and "+ userPenguin.name +" like to do?");
	console.log("You currently have "+ pebbleCount+" pebbles, and can get more through Math Time.")
	console.log("\n\n1) Math Time!\n2)"+userPenguin.name+", do a trick! (Costs "+pebbleCost+" pebbles)")
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
	console.log("Nice to meet you!")
	sleep(1000);
	console.log("I see you have a penguin with you, "+userName+"! What's their name?");
	userPrompt.question("", function(name) {
		console.log("\nAre they a boy or a girl?");
		userPrompt.question("", function(gender) {
			gender = gender.toUpperCase();
			if (gender == "BOY" || gender == "GIRL") {
				wipeScreen();
				sleep(500);
				console.log("What kind of penguin are they?");
				sleep(1000);
				console.log("Emperor?");
				sleep(200);
				console.log("Gentoo?");
				sleep(200);
				console.log("Rockhopper?");
				sleep(200);
				userPrompt.question("", function(type) {
				type = type.toUpperCase();
				if (type == "EMPEROR" || type == "GENTOO" || type == "ROCKHOPPER")
					pPeng = new penguin(name, gender, type);
					userPenguin = pPeng;
					mainMenu();
				});
			} else {
				console.log("Sorry, please tell me if they're a BOY or a GIRL. Let's start again...")
				sleep(2000);
				sleep(2000);
				penguinMaker();
			}
		});
	});
}

function playerName() {
	console.log("Hello there! What's your name?")
	userPrompt.question("", function(entry) {
		userName = entry.toUpperCase();;
		penguinMaker();
	});
}






//*******Runners********

playerName();
