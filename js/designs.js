let inputHeight = document.querySelector('#inputHeight');
let inputWidth = document.querySelector('#inputWidth');
const pixelCanvas = document.querySelector('#pixelCanvas');
let tableRow = '';
let tableCell = '';
const submitButton = document.querySelector('#submitButton');

//for every iteration of r, make a table row
//for every table row, make a table cell and attach it to the row equal to c
//append completed row to pixelCanvas

function makeGrid(row, col) {
	for (let r = 1; r <= row; r++) {
		tableRow = document.createElement('tr');
		for (let c = 1; c <= col; c++) {
			tableCell = document.createElement('td');
			tableRow.appendChild(tableCell);
		}
		pixelCanvas.appendChild(tableRow);
	}
};

// grab values from inputs
// run makeGrid()
submitButton.addEventListener('click', function (e) {
	e.preventDefault();
	let rows = inputHeight.value;
	let columns = inputWidth.value;
	makeGrid(rows, columns);
});


// checks for td element click before changing color
pixelCanvas.addEventListener('click', function (e) {
	let color = document.getElementById('colorPicker').value;
	console.log(color);
	if(e.target && e.target.nodeName === 'TD'){
		e.target.style.background = color;
	}
});

// erase on right click
pixelCanvas.addEventListener('contextmenu', function(e){
	e.preventDefault();
	if(e.target && e.target.nodeName === 'TD'){
		e.target.style.background = 'transparent';
	}
});