var selectedColor = 0;

var inputSpace = document.createElement("input");
inputSpace.id = "userInput";
inputSpace.setAttribute("type", "number");

var colors = ["#F012BE", "#85144b", "#FF4136", "#FF851B", "#FFDC00", "#01FF70", "#3D9970", "#39CCCC", "#0074D9",];



function qUser() {
	var inputP = document.createElement("p");
	document.body.appendChild(inputP);
	inputP.className = "inputSpaceClass";
	var inputSpaceText = document.createTextNode("Please enter the dimension needed:");
	inputP.appendChild(inputSpaceText);

	inputP.appendChild(inputSpace);

	var submit = document.createElement("BUTTON");
	submit.id = "submitId";
	var submitText = document.createTextNode("Ready");
	submit.appendChild(submitText);
	inputP.appendChild(submit);

	document.getElementById("submitId").onclick = gridGenerator;
}
qUser();


for (var m = 0; m < colors.length; m++) {
	var colDis = document.createElement("div");
	colDis.id = colors[m];
	colDis.className = "colorsClass";
	colDis.style.backgroundColor = colors[m];
	colDis.addEventListener("click", colorPicker);
	document.body.appendChild(colDis);
}

var divContainer = document.createElement("div");
divContainer.id = "container";
document.body.appendChild(divContainer);

//make grid canvas to draw:
function gridGenerator() {

var x = document.getElementById("userInput").value;

	if (x < 500) {

		for (var i = 0; i < x; i++) {

			var row = document.createElement("div");

			for (var j=0; j < x; j++) {

				var makeDiv = document.createElement("div");
				makeDiv.className = "boxClass";
				makeDiv.addEventListener("mouseover", draw);

				row.appendChild(makeDiv);
			}
		divContainer.appendChild(row);
		}
	}



//erase
	var eraserButton = document.createElement("BUTTON");
		eraserButton.id = "myEraser";
		var eraserText = document.createTextNode("delete");
		eraserButton.appendChild(eraserText);
		document.body.appendChild(eraserButton);
		eraserButton.addEventListener("click", draw);
}

//color pick
function colorPicker(e) {
	selectedColor = e.target.id;
}
function draw(e) {

	if (selectedColor==0) {
		selectedColor = "#F012BE";
	}
	else if (this.id == "myEraser") {
		selectedColor = "white";
	}
	e.target.style.backgroundColor = selectedColor;

}
