document.addEventListener('DOMContentLoaded', function () {
    // Global Variables
    const sections = document.querySelectorAll('.content-section');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');
    const logoLink = document.getElementById('logoLink');
    const themeToggle = document.querySelector('.theme-toggle');
    let body = document.body; // Declare body variable

    // Function to toggle the dark theme class
    function toggleThemeClass() {
        body.classList.toggle('dark-theme');
        updateThemeIcons();
        updateThemeIndicator();
    }

    // Function to update moon and sun icons based on the current theme
    function updateThemeIcons() {
        moonIcon.style.display = body.classList.contains('dark-theme') ? 'inline-block' : 'none';
        sunIcon.style.display = body.classList.contains('dark-theme') ? 'none' : 'inline-block';
    }
    // Function to update the theme indicator
    function updateThemeIndicator() {
        const themeIndicator = document.getElementById('themeIndicator');
        themeIndicator.textContent = body.classList.contains('dark-theme') ? 'Dark Theme' : 'Light Theme';
    }

    // Function to add hover effect for the theme icons
    function addThemeIconHoverEffects() {
        // Hover effect for the moon icon in light theme
        moonIcon.addEventListener('mouseover', function () {
            if (!body.classList.contains('dark-theme')) {
                moonIcon.style.textShadow = '0 0 8px #fff'; // White glow in light theme
            } else {
                moonIcon.style.textShadow = '0 0 8px #333'; // Dark glow in dark theme
            }
        });

        moonIcon.addEventListener('mouseout', function () {
            moonIcon.style.textShadow = 'none'; // Remove text shadow on mouseout
        });

        // Hover effect for the sun icon in dark theme
        sunIcon.addEventListener('mouseover', function () {
            if (body.classList.contains('dark-theme')) {
                sunIcon.style.textShadow = '0 0 8px #fff'; // White glow in dark theme
            } else {
                sunIcon.style.textShadow = '0 0 8px #333'; // Dark glow in light theme
            }
        });

        sunIcon.addEventListener('mouseout', function () {
            sunIcon.style.textShadow = 'none'; // Remove text shadow on mouseout
        });
    }

    // Function to hide all sections except the specified one
    function hideSections(exceptSectionId) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show the specified section
        document.getElementById(exceptSectionId).classList.remove('hidden');
    }

    // Function to handle the switch toggle
    function handleThemeToggle() {
        themeToggle.addEventListener('click', function () {
            toggleThemeClass();
        });
    }

    // Function to handle navigation clicks within the page
    function handleNavigationClicks() {
        document.querySelector('nav').addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.tagName === 'A') {
                const targetSectionId = e.target.getAttribute('href').substring(1);
                toggleSection(targetSectionId);
            }
        });
    }

    // Function to toggle visibility of sections based on navigation
    function toggleSection(sectionId) {
        // Show the selected section
        document.getElementById(sectionId).classList.remove('hidden');

        // Hide other sections
        hideSections(sectionId);
    }

    // Function to handle logo link click event
    function handleLogoLinkClick() {
        logoLink.addEventListener('click', function (e) {
            e.preventDefault();
            toggleSection('landing');
        });
    }

    

    // Call functions on page load
    body.classList.add('dark-theme'); // Set the default theme to dark
    updateThemeIcons();
    handleThemeToggle();
    addThemeIconHoverEffects();
    handleNavigationClicks();
    handleLogoLinkClick();
    alternateAnimation();

    // Add an event listener to run when the page finishes loading
    window.addEventListener('load', function () {
        // Initially hide all sections except the landing page
        hideSections('landing');
        updateThemeIndicator();
    });
});
