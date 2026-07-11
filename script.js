// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        toggleBtn.textContent = '🌙';
    } else {
        toggleBtn.textContent = '💡';
    }
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    navLinks.classList.toggle('active');
});