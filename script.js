const divContainer = document.querySelector('.container');

const divsInGrid = 256;

function populateDivs() {
  for (let i = 0; i <= divsInGrid; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.className = 'grid';
    // gridDiv.style.cssText = 'display: flex; justify-content: center; width: 32px;'
    divContainer.appendChild(gridDiv);
  }
}

populateDivs();