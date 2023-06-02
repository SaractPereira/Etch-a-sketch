document.addEventListener('DOMContentLoaded', () => { // nao percebi bem??
    const squaregrid = document.querySelector('.squaregrid');
    const colorPicker = document.getElementById('colorPicker');
    const eraserButton = document.querySelector('.eraserbutton');
    const clearButton = document.getElementById('clearButton');
  
    // Create the grid cells dynamically
    for (let i = 0; i < 16 * 16; i++) {
      const cell = document.createElement('div');
      squaregrid.appendChild(cell);
    }

        // Change the cell's background color on mouseover using the selected color
    squaregrid.addEventListener('mouseover', (event) => {
        if (event.target.matches('div') && !eraserButton.classList.contains('active')) {
          const color = colorPicker.value;
          event.target.style.backgroundColor = color;
        } else if (event.target.matches('div') && eraserButton.classList.contains('active')) {
          event.target.style.backgroundColor = '#ffffff'; // Set the background color to white (eraser color)
        }
      });
    
      // Toggle the eraser button's active state
      eraserButton.addEventListener('click', () => {
        eraserButton.classList.toggle('active');
      });

      // Clear the grid by resetting the background color of all cells to the initial color
  clearButton.addEventListener('click', () => {
    const cells = squaregrid.querySelectorAll('div');
    cells.forEach((cell) => {
      cell.style.backgroundColor = '#ffffff'; // Set the background color to white (or any desired initial color)
    });
  });
  });
  