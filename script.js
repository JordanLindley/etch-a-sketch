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

// area of grid
let divsInGrid = 256;


// loop up to the area of the grid, append Divs to generate grid. CSS to style into actual grid.
const populateDivs = () => {
  for (let i = 0; i < divsInGrid; i++) {
    const cell = document.createElement('div');
    // add new class to differentiate grid boxes by class.
    cell.classList.add('item-' + (i + 1), 'grid');
    container.appendChild(cell);
  }
}

populateDivs();

const gridCells = document.querySelectorAll('.grid');

const draw = (gridCells) => { 
  gridCells.forEach(gridCell => gridCell.addEventListener('mouseover', () => gridCell.classList.add('hovered')));
}

draw(gridCells);