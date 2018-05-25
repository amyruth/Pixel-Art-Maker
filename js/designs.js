// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let inputHeight = document.querySelector('#inputHeight');
let inputWidth = document.querySelector('#inputWidth');
let color = document.querySelector('#colorPicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
let tableRow = '';
let tableCell = '';

//for every iteration of r, make a table row
//for every table row, make a table cell and attach it to the row equal to c
//append completed row to pixelCanvas

function makeGrid(row, col) {
  for(let r = 1; r <= row; r++){
    tableRow = document.createElement('tr');
    for(let c = 1; c <= col; c++){
      tableCell = document.createElement('td');
      tableRow.appendChild(tableCell); 
    }
    pixelCanvas.appendChild(tableRow);
  }
};
