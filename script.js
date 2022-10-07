const container = document.querySelector('.container');
// const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('.clear');
const resizeButton = document.querySelector('.resize');
const rgbButton = document.querySelector('.rgb');

// **** removeButtonHover not functional. Will fix in the future ****

// make the buttons look nice when you hover over them with your mouse.
// buttons.forEach(button => button.addEventListener('mouseover', () => {
//   button.classList.add('button-hover');
// }))

// // remove button border and transform.
// const removeButtonBorder = (event) => {
//   if (event.propertyName !== 'transform') return; // skip if not a transform
//   buttons.classList.remove('button-hover');
// }

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
    cell.addEventListener('mouseenter', () => cell.classList.add('hovered'));

    container.appendChild(cell);
  }
}
// call inital populate divs function to begin program with a 16x16 grid.
populateDivs(gridSize);

let gridCells = document.querySelectorAll('.grid');

// clear button functionality, remove 'hovered' fom all gridCells
const clearCells = () => {
  gridCells.forEach(cell => cell.classList.remove('hovered'));
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
