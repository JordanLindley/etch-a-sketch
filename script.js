const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
const resizeButton = document.querySelector('.resize');
const modeButtons = document.querySelectorAll('.mode');
const rainbowButton = document.querySelector('.rainbow');
const shadeButton = document.querySelector('.shade');
const classicButton = document.querySelector('.classic');

// ink color and picker function
let drawColor = '#000000';
let mode = 'classic';

// generate random rgb color
const createRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// curried function, called on line 61. drawEventListener() called by color button event listeners
const draw = cell => () => {
  if (mode == 'rainbow') {
    drawColor = createRGB();
  } else if (mode == 'shading') {
    const currentOpacity = cell.style.opacity;
    // currentOpacity = .1;
    drawColor = `rgb(0, 0, 0)`;
    if (currentOpacity >= 0.1) {
      cell.style.opacity = `${Number(currentOpacity) + 0.1}`;
    } else cell.style.opacity = 0.1;
  } else if (mode = 'classic') {
    drawColor = '#000000';
  }
  cell.style.backgroundColor = drawColor;
};

// **** DRAW GRID ****
// starting area of grid 16, maintain aspect ratio with maxWidth.
let gridSize = 16;
const maxWidth  = 600;

// loop up to the area of the grid, append divs to generate grid. CSS to style into actual grid.
const populateDivs = (gridSize) => {
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${container.offsetWidth / gridSize}px [col-start])`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${container.offsetWidth / gridSize}px [row-start])`;
  
  for (let i = 0; i < gridSize*gridSize; i++) {
    let cell = document.createElement('div');

    // add new class to differentiate grid boxes by class. Likely not necessary, but I did it anyway.
    cell.classList.add('item-' + (i + 1), 'grid');
    cell.style.height = `${maxWidth / gridSize}px`;
    cell.style.width = `${maxWidth / gridSize}px`;
    
    container.appendChild(cell);
  }
}

// call inital populate divs function to begin program with a 16x16 grid.
populateDivs(gridSize);

let gridCells = document.querySelectorAll('.grid');

// add event listener to each cell to draw on grid when mouse hovers over
const drawEventListener = () => {
  gridCells.forEach(cell => cell.addEventListener('mouseenter', draw(cell)));
}

drawEventListener()

// clear button functionality, remove 'hovered' fom all gridCells
const clearCells = () => {
  gridCells.forEach(cell => cell.style.backgroundColor = 'white');
  gridCells.forEach(cell => cell.style.opacity = '');
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

// **** Color changing buttons ****
// rainbow button
rainbowButton.addEventListener('click', () => {
  mode = 'rainbow';
  drawEventListener();
})

// classic button
classicButton.addEventListener('click', () => {
  mode = 'classic';
  drawEventListener();
})

shadeButton.addEventListener('click', () => {
  mode = 'shading'  
  drawEventListener();
})

const selectButton = (button) => {
  if (button.classList.contains('mode')) {
    modeButtons.forEach((selection) => {
      selection.classList.remove('btn-on');
    });
  }
  button.classList.add('btn-on');
}
