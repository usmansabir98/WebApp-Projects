var numOfSq = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtns = document.querySelectorAll(".mode");

init();

function init()
{
	setupModeBtns();
	setupSquares();
	reset();
}

function setupModeBtns()
{
	for(var i=0; i<modeBtns.length; i++)
	{
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"? numOfSq=3 : numOfSq=6 ;
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++)
	{
		//squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;

			if(clickedColor===pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}



// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numOfSq = 3;
// 	colors = generateRandomColors(numOfSq);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelblue";
// 	for(var i=0; i<squares.length; i++)
// 	{
// 		if(colors[i])
// 			squares[i].style.backgroundColor = colors[i];
// 		else
// 			squares[i].style.display = "none";
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numOfSq = 6;
// 	colors = generateRandomColors(numOfSq);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelblue";
// 	for(var i=0; i<squares.length; i++)
// 	{
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

function reset()
{
	//generate all new colors
	colors = generateRandomColors(numOfSq);
	//pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// change message
	messageDisplay.textContent = "";
	// change Play Again to New Colors
	resetButton.textContent = "new colors";
	//change h1 bg
	h1.style.backgroundColor = "steelblue";
	//change colors of squares
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else
			squares[i].style.display = "none";
	}
}

resetButton.addEventListener("click", function(){
	reset();
});

// colorDisplay.textContent = pickedColor;
function changeColors(color)
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor( Math.random()*colors.length );
	return colors[random];
}

function generateRandomColors(num) {
	var list = [];
	for(var i=0; i < num; i++)
	{
		list.push(randomColor());
	}
	return list;
}

function randomColor() {
	// generate RGB colors between 0 - 255
	var r = Math.floor( Math.random()*256 );
	var g = Math.floor( Math.random()*256 );
	var b = Math.floor( Math.random()*256 );
	return "rgb(" + r + ", " + g + ", " + b + ")";
}