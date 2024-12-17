// JavaScript File: script.js

// Function to add tabindex attribute to all figures
function addTabIndexToFigures() {
    const figures = document.querySelectorAll('figure');
    figures.forEach((figure, index) => {
      figure.setAttribute('tabindex', 0); // Make each figure focusable
      figure.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          figure.click(); // Simulate click on Enter key press
        }
      });
    });
  }
  
  // Function to handle page load
  function onPageLoad() {
    console.log('Page loaded! Initializing photo gallery.');
    addTabIndexToFigures();
  }
  
  // Event listener for page load
  window.onload = onPageLoad;
  
  // Example of adding mouse movement tracking (optional)
  document.addEventListener('mousemove', (event) => {
    console.log(`Mouse moved to X: ${event.clientX}, Y: ${event.clientY}`);
  });
  