//your code here
// Get the input and output elements
const inputBox = document.getElementById('evaluatedText');
const letterCountDisplay = document.getElementById('letterCount');

// Attach an input event listener
inputBox.addEventListener('input', function () {
  // Get the current value and count its length
  const length = inputBox.value.length;
  
  // Update the count on screen
  letterCountDisplay.textContent = length;
});
