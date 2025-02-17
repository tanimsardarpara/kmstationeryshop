// Function to open the modal
function openModal() {
    document.getElementById('order-modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('order-modal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('order-modal')) {
        document.getElementById('order-modal').style.display = 'none';
    }
}












// Get the bubbles container
const bubblesContainer = document.querySelector('.bubbles');

// Create bubbles
for (let i = 0; i < 128; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
  bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
  bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
  bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
  bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
  bubblesContainer.appendChild(bubble);
}

