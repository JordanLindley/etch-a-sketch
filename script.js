const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
const resizeButton = document.querySelector('.resize');
const colorButtons = document.querySelectorAll('.color');
const rainbowButton = document.querySelector('.rainbow');
const shadeButton = document.querySelector('.shade');
const classicButton = document.querySelector('.classic');

// ink color and picker
let drawColor = '#000000';


// **** DRAW GRID ****
// area of grid
let gridSize = 16;
const maxWidth  = 600;

// loop up to the area of the grid, append Divs to generate grid. CSS to style into actual grid.
const populateDivs = (gridSize) => {
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${container.offsetWidth / gridSize}px [col-start])`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${container.offsetWidth / gridSize}px [row-start])`;
  
  for (let i = 0; i < gridSize*gridSize; i++) {
    let cell = document.createElement('div');
    // add new class to differentiate grid boxes by class.
    cell.classList.add('item-' + (i + 1), 'grid');
    cell.style.height = `${maxWidth / gridSize}px`;
    cell.style.width = `${maxWidth / gridSize}px`;
    // add event listener to draw on grid
    cell.addEventListener('mouseenter', () => cell.style.backgroundColor = drawColor);

    container.appendChild(cell);
  }
}
// call inital populate divs function to begin program with a 16x16 grid.
populateDivs(gridSize);

let gridCells = document.querySelectorAll('.grid');

// clear button functionality, remove 'hovered' fom all gridCells
const clearCells = () => {
  gridCells.forEach(cell => cell.style.backgroundColor = 'white');
}

clearButton.addEventListener('click', clearCells);

// take user entry, call populateDivs(user entry)
const resizeGrid = () => {
  // first, start with a blank slate by removing gridCells divs.
  gridCells.forEach(gridCell => gridCell.remove());
  // prompt user, default to 16
  gridSize = prompt('How many rows and columns? (1 - 100)', '16');

  // if over 100, scold them and ask again.
  while (parseInt(gridSize) > 100) {
    alert('Whoa! Too many squares. Try a little smaller!')
    gridSize = prompt('How many rows and columns? (1 - 100)', '16');
   }
  // if user entry is not a number, scold them ask again.
  if (isNaN(gridSize) == true) {
    alert('You need to enter a number between 1 and 100!');
    gridSize = prompt('How many rows and columns? (1 - 100)', '16');
  }
  populateDivs(parseInt(gridSize));
  gridCells = document.querySelectorAll('.grid');
}

resizeButton.addEventListener('click', resizeGrid);

const randomColor = () => {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
