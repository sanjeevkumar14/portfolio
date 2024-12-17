// Dark Mode Toggle
const themeToggleButton = document.getElementById('themeToggle');

themeToggleButton.addEventListener('click', () => {
    console.log('Theme toggle button clicked'); // Debugging line
    document.body.classList.toggle('dark-mode'); // Change to 'dark-mode'

    // Change the icon based on the current theme
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = "🌞";  // Switch to light mode icon
    } else {
        themeToggleButton.textContent = "🌙";  // Switch to dark mode icon
    }
});
// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});