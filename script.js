function navigateToHomePage() {
    // Adjust this function based on your website structure and navigation
    window.location.href = "index.html";
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    // Toggle between light and dark themes
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Change the theme icon based on the current theme
    const isDarkTheme = body.classList.contains('dark-theme');
    themeIcon.innerHTML = isDarkTheme ? '🌙' : '☀️';
}

function toggleFooterVisibility() {
    const footer = document.getElementById('myFooter');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Adjust the threshold as needed based on your design
    const threshold = 200; // Adjust this value to your preference

    // Toggle the visibility of the footer
    if (scrollPosition > threshold) {
        footer.style.opacity = 1;
        footer.style.pointerEvents = "auto";
    } else {
        footer.style.opacity = 0;
        footer.style.pointerEvents = "none";
    }
}

// Attach the function to the scroll event
window.addEventListener("scroll", toggleFooterVisibility);

// Call the function once to set the initial state
toggleFooterVisibility();

// Initialize theme based on user preference or system preference
// You can use a more sophisticated method for determining user preference
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    toggleTheme(); // If the user prefers dark mode, initialize the dark theme
}

// Event listener for the theme toggle button
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Attach the scroll-to-top function to the scroll event
window.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-to-top');

    // Show or hide the scroll-to-top button based on the scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
        scrollButton.style.opacity = '1'; // Set opacity to 1 for fade-in effect
    } else {
        scrollButton.style.opacity = '0'; // Set opacity to 0 for fade-out effect
        setTimeout(function () {
            scrollButton.style.display = 'none';
        }, 300); // Delay hiding to allow for the fade-out effect
    }
});
// Add this to your existing script.js file

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let st = window.scrollY;

    // Check scroll direction
    if (st > lastScrollTop) {
        // Scrolling down, hide the top bar
        document.querySelector(".top-bar").classList.add("hide-top-bar");
    } else {
        // Scrolling up, show the top bar
        document.querySelector(".top-bar").classList.remove("hide-top-bar");
    }

    lastScrollTop = st;
});

function showDetails(id) {
    document.getElementById(id).style.opacity = "1";
}

function hideDetails(id) {
    document.getElementById(id).style.opacity = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");

    skills.forEach((skill) => {
        const progressBar = skill.querySelector(".progress-bar");
        const subSkills = skill.querySelectorAll(".sub-skill");
// Add event listeners for hover effect
document.getElementById('technical-skill').addEventListener('mouseover', () => {
    // Set the width to 100% on hover
    document.querySelector('#technical-skill .progress-bar').style.width = '100%';
});
// Add event listeners for hover effect
document.getElementById('language-skill').addEventListener('mouseover', () => {
    // Set the width to 100% on hover
    document.querySelector('#language-skill .progress-bar').style.width = '100%';
});// Add event listeners for hover effect
document.getElementById('soft-skill').addEventListener('mouseover', () => {
    // Set the width to 100% on hover
    document.querySelector('#soft-skill .progress-bar').style.width = '100%';
});
        skill.addEventListener("mouseenter", function () {
            const width = progressBar.getAttribute("data-width");
            progressBar.style.width = width;
        });

        skill.addEventListener("mouseleave", function () {
            progressBar.style.width = 0;
        });

        subSkills.forEach((subSkill) => {
            subSkill.addEventListener("mouseenter", function () {
                const width = subSkill.getAttribute("data-width");
                progressBar.style.width = width;
            });

            subSkill.addEventListener("mouseleave", function () {
                const width = progressBar.getAttribute("data-width");
                progressBar.style.width = width;
            });
        });
    });
});
window.addEventListener("scroll", function () {
    var body = document.body;
    var scrolled = window.scrollY > 0;
    body.classList.toggle("scrolled", scrolled);
});

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to handle scroll events
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Attach the handleScroll function to the scroll event
document.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();


document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".your-element");

    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < window.innerHeight * 0.8) {
                element.classList.add("animate");
            }
        });
    }

    // Initial check on page load
    checkScroll();

    // Check on scroll
    document.addEventListener("scroll", checkScroll);
});



    // Image slideshow gallery
    const imagePaths = [
        'images/Archit Camera.JPG',
        'images/ME Camera.jpeg',
        'images/ME3.jpg',
        'images/Archit About Me.jpg',
        'images/AboutMEarchit.jpg'
        
    ];

    let currentImageIndex = 0;
    const imageCarousel = document.getElementById('image-carousel');

    function updateImage() {
        imageCarousel.innerHTML = `<img src="${imagePaths[currentImageIndex]}" alt="Archit's Photo">`;
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        setTimeout(updateImage, 5000); // Change image every 5 seconds
    }

    // Initial image load
    updateImage();


   // Initialize the map
   const map = L.map("map").setView([28.61300758656892, 77.22950341669589], 4);

   // Add a tile layer (you can choose different tile providers)
   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

   // Add markers for visited and wishlist locations
   const visitedMarker = L.marker([28.61300758656892, 77.22950341669589]).addTo(map)
       .bindPopup("New Delhi (Visited)");
       visitedMarker = L.marker([33.03082, 74.94904]).addTo(map)
       .bindPopup("VaishnoDevi Mata Temple (Visited)");
       
   const wishlistMarker = L.marker([51.5074, -0.1278]).addTo(map)
       .bindPopup("London (Wishlist)");
