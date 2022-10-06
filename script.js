const container = document.querySelector('.container');

// area of grid
const divsInGrid = 256;

// loop up to the area of 
function populateDivs() {
  for (let i = 0; i < divsInGrid; i++) {
    const cell = document.createElement('div');
    cell.classList.add('item-' + (i + 1), 'grid');
    // gridDiv.style.cssText = 'display: flex; justify-content: center; width: 32px;'
    container.appendChild(cell);
  }
}

populateDivs();


