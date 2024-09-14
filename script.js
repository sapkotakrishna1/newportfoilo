document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const boxSmall = document.querySelector('.box-small');
    
    // Function to toggle the menu visibility
    function toggleMenu() {
        boxSmall.classList.toggle('show');
        navMenu.classList.toggle('show');
    }

    // Function to close the menu
    function closeMenu() {
        boxSmall.classList.remove('show');
        navMenu.classList.remove('show');
    }

    // Event listener for menu toggle button
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up to the document
        toggleMenu();
    });

    // Event listener for clicks outside the menu
    document.addEventListener('click', function(event) {
        if (boxSmall.classList.contains('show') && !boxSmall.contains(event.target) && event.target !== menuToggle) {
            closeMenu();
        }
    });

    // Event listener for touch events outside the menu
    document.addEventListener('touchstart', function(event) {
        if (boxSmall.classList.contains('show') && !boxSmall.contains(event.target) && event.target !== menuToggle) {
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



// Function to open the lightbox and display the clicked image
function openLightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    lightbox.style.display = "flex"; // Show lightbox
    lightboxImg.src = element.src; // Set the lightbox image source to the clicked image
}

// Function to close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Hide lightbox
}

