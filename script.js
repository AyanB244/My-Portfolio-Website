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
    event.stopPropagation();
    navLinks.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (navLinks.classList.contains('active') && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});