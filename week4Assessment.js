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



//*******Functions*******

function mainMenu() {
	wipeScreen();
	
}

function penguinMaker() {
	wipeScreen();
	sleep(500);
	var penguinName;
	var penguinGend;
	var penguinType;
	console.log("I see you have a penguin with you! What's their name?");
	userPrompt.question("", function(name) {
		
	});

}








//*******Runners********

mainMenu();
