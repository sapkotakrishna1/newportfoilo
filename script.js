document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Function to toggle the menu visibility
    function toggleMenu() {
        navMenu.classList.toggle('show');
    }

    // Function to close the menu
    function closeMenu() {
        navMenu.classList.remove('show');
    }

    // Event listener for menu toggle button
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up to the document
        toggleMenu();
    });

    // Event listener for clicks outside the menu
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('show') && !navMenu.contains(event.target) && event.target !== menuToggle) {
            closeMenu();
        }
    });

    // Event listener for touch events outside the menu
    document.addEventListener('touchstart', function(event) {
        if (navMenu.classList.contains('show') && !navMenu.contains(event.target) && event.target !== menuToggle) {
            closeMenu();
        }
    });

    // Event listener for menu items
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Event listener for touch events on menu items
    navMenu.addEventListener('touchstart', function(event) {
        if (event.target.tagName === 'A') {
            closeMenu();
        }
    });
});
