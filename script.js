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

// loop up to the area of the grid, append Divs to generate grid. CSS to style into actual grid.
const populateDivs = (gridSize) => {
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${container.offsetWidth / gridSize}px [col-start])`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${container.offsetWidth / gridSize}px [row-start])`;
  
  for (let i = 0; i < gridSize*gridSize; i++) {
    let cell = document.createElement('div');
    // add new class to differentiate grid boxes by class.
    cell.classList.add('item-' + (i + 1), 'grid');
    container.appendChild(cell);
  }
}

populateDivs(gridSize);

const gridCells = document.querySelectorAll('.grid');

const draw = (gridCells) => { 
  gridCells.forEach(gridCell => gridCell.addEventListener('mouseover', () => gridCell.classList.add('hovered')));
}

// clear button functionality, remove 'hovered' fom all gridCells
const clearCells = () => {
  gridCells.forEach(cell => cell.classList.remove('hovered'));
}

clearButton.addEventListener('click', clearCells);

const resizeGrid = () => {
  gridSize = prompt('How many rows and columns? (1 - 100)', '16');
  gridCells.forEach(gridCell => gridCell.remove());
  if (parseInt(gridSize) > 100) {
    alert('Whoa! Too many squares. Try a little smaller!');
   } else {
    populateDivs(parseInt(gridSize));
  }
}

resizeButton.addEventListener('click', resizeGrid);

const randomColor = () => {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

draw(gridCells);