// alert("hey");

/*
//Module design pattern: we can add a bunch of props inside an object

var game = {}

game.init = function() {
	setUpModeButton();
	setUpSquares();
	reset();
}

game.init();
*/

var numberOfSquares = 6;
// var colors = generateRandomColors(numberOfSquares);
var colors = [];
// var pickedColor = pickColor();
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
// colorDisplay.textContent = pickedColor;

var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {									 						//mode button function event listener
	//mode button event listeners
	setUpModeButton();
	//set up squares
	setUpSquares();
}

function setUpModeButton() {
	for (var i = 0; i < modeButtons.length; i++) {
		//add click listeners to square
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//figure how many sqaures to show, pick new colors, pick a new picked colors, update page to refresh page;
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
			// if (this.textContent === "Easy") {
			// 	numberOfSquares = 3;
			// } else {
			// 	numberOfSquares = 6;
			// }
			reset(numberOfSquares);
		});
	}
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
	//adding clickable squares
		squares[i].addEventListener("click", function () {
			//click listening the color
	//		alert(this.style.backgroundColor);
			//grab colors from squares
			var clickedColor = this.style.backgroundColor;
			//comparing picked color to clicked color
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
	reset();
}

/*
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});
*/
resetButton.addEventListener("click", function() {
	// colors = generateRandomColors(numberOfSquares);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;

	// messageDisplay.textContent = "";
	// this.textContent = "New Colors";

	// for (var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
	reset();
});

function changeColors(colors) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 255);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 255);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 255);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	$(".colorgen1").css("color", randomColor());
	$(".colorgen2").css("color", randomColor());
	$(".colorgen3").css("color", randomColor());

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}
