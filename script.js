// Get the toggle button by its ID
const toggleBtn = document.getElementById('theme-toggle');

// When the button is clicked, run this function
toggleBtn.addEventListener('click', function(event) {
        event.preventDefault();
    // Add or remove the 'light-mode' class on the body
    document.body.classList.toggle('light-mode');
    
    // Change the emoji based on which mode is active
    if (document.body.classList.contains('light-mode')) {
        toggleBtn.textContent = '🌙';
    } else {
        toggleBtn.textContent = '💡';
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    navLinks.classList.toggle('active');
});