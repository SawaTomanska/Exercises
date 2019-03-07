var colors = [];
var MySecretColor;
var level = 3;
var div = document.querySelectorAll("section .container div");
var containerForDiv = document.querySelector("section .container");
var displayLevel = document.querySelector("#level");
var levelEasy = document.querySelector("#levelEasy");
var levelHard = document.querySelector("#levelHard");
var reset = document.querySelector("#reset");
var displayColor = document.querySelector("h1");
var displayScore = document.querySelector("#score");
var header = document.querySelector("header");

// draw array color
function drawColor(lev) {
	resetColor();
	var drawNum;
	var color = "rgb(";
	for (var j = 1; j <= lev; j++) {
		for (var i = 1; i <= 3; i++) {
			drawNum = Math.round(Math.random() * 226);
			if (i <= 2) {
				color = color + drawNum + ", ";
			} else {
				color = color + drawNum + ")";
			}
		}
		colors.push(color);
		color = "rgb(";
	}
	return colors;
}

// print squer color
function printColor(lev) {
	for (var i = 0; i < lev; i++) {
		////		if (containerForDiv.parentNode !== null) {
		////			console.log("delete");
		//////			containerForDiv.parentNode.removeChild(this);
		////		}
		//		var tagDiv = document.createElement("div");
		//		containerForDiv.appendChild(tagDiv);
		//	}
		div[i].style.backgroundColor = colors[i];
		div[i].style.cursor = "pointer";
	}
}


//// reset all
//function resetColor() {
//	for (var i = 0; i < 6; i++) {
//		div[i].style.backgroundColor = "transparent";
//		div[i].style.cursor = "default";
//	}
//	colors = [];
//}

// new color all
function newColor(whichLevel) {
	//	div.forEach(function (item) {
	//		item.style.backgroundColor = "transparent";
	//		item.style.cursor = "default";
	//	});
	//	colors = [];
	//	MySecretColor = "";
	//	displayScore.style.color = "black";
	drawColor(whichLevel);
	printColor(whichLevel);
	MySecretColor = MyColor(whichLevel);
	header.style.backgroundColor = "black";
	displayColor.innerHTML = MySecretColor;
	displayScore.innerHTML = "";
}

// draw one color in array
function MyColor(muchColor) {
	var myColor = Math.round(Math.random() * (muchColor -1));
	return colors[myColor];
}

//similar Color
function SimileColor(ColSecret, ColGuess) {
	//	console.log(ColSecret);
	//	console.log(ColGuess);
	if (ColGuess === ColSecret) {
		displayScore.innerHTML = "You Guess!!!";
		displayScore.style.color = ColSecret;
		header.style.backgroundColor = ColSecret;
		reset.innerHTML = "New Game?";
		for (var i = 0; i < level; i++) {
			div[i].style.backgroundColor = ColSecret;
		}
	} else {
		displayScore.innerHTML = "Noup!! Try again.";
		displayScore.style.color = "black";
		header.style.backgroundColor = "black";
	}
}

//Which level is selected
function changeLevel(whichLevel) {
	if (whichLevel == 3) {
		levelEasy.classList.add("active");
		levelHard.classList.remove("active");
	} else {
		levelHard.classList.add("active");
		levelEasy.classList.remove("active");
	};
	drawColor(whichLevel);
	printColor(whichLevel);
	MySecretColor = MyColor(whichLevel);
	displayColor.innerHTML = MySecretColor;
	displayScore.innerHTML = "";
}

//reset color
function resetColor() {
	div.forEach(function (item) {
		item.style.backgroundColor = "transparent";
		item.style.cursor = "default";
	});
	colors = [];
	MySecretColor = "";
	displayScore.style.color = "black";
	reset.innerHTML = "New Colors";
}

levelEasy.addEventListener("click", function () {
	level = 3;
	changeLevel(level);
});

levelHard.addEventListener("click", function () {
	level = 6;
	changeLevel(level);
});

reset.addEventListener("click", function () {
	newColor(level);
});

div.forEach(function (item) {
	item.addEventListener("click", function () {
		SimileColor(MySecretColor, this.style.backgroundColor);
	});
});
