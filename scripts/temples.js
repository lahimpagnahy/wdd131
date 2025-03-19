// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Set last modified date
    document.getElementById('lastModified').textContent = document.lastModified;
    
    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const primaryNav = document.getElementById('primaryNav');
    
    hamburgerBtn.addEventListener('click', function() {
        primaryNav.classList.toggle('open');
        
        // Change hamburger button to X when menu is open
        if (primaryNav.classList.contains('open')) {
            hamburgerBtn.textContent = '✕';
        } else {
            hamburgerBtn.textContent = '≡';
        }
    });
    
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (primaryNav.classList.contains('open')) {
                primaryNav.classList.remove('open');
                hamburgerBtn.textContent = '≡';
            }
        });
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!event.target.closest('header')) {
            if (primaryNav.classList.contains('open')) {
                primaryNav.classList.remove('open');
                hamburgerBtn.textContent = '≡';
            }
        }
    });
    
    // Stop event propagation when clicking on hamburger button
    hamburgerBtn.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});