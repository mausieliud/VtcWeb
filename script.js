// Array of background images
const backgrounds = [
    'url("Image/Bg2.jpg")',
    'url("Image/Bg3.jpg")',
    'url("Image/Bg4.jpg")',
    'url("Image/Bg5.jpg")',
    'url("Image/Bg6.jpg")'
];

// Ensure content array has five elements matching the backgrounds
const content = [
    {
        title: 'Join Our Skilled Programs',
        description: 'Empowering You for the Future',
        links: `
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Explore Courses</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Admissions Portal</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Scholarship Opportunities</a>
        `
    },
    {
        title: 'Transform Your Skills Today',
        description: 'Building Pathways to Success',
        links: `
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">View Training Programs</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Internships</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Apply Now</a>
        `
    },
    {
        title: 'Innovate Your Future',
        description: 'Technological Excellence in Every Step',
        links: `
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Research & Development</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Collaboration Opportunities</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Startups and Incubation</a>
        `
    },
    {
        title: 'Learn from Experts',
        description: 'Knowledge from Industry Leaders',
        links: `
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Industry Workshops</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Conferences</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Certifications</a>
        `
    },
    {
        title: 'Build Your Network',
        description: 'Connections for Lifelong Success',
        links: `
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Alumni Network</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Career Fairs</a>
            <a href="#" style="color:purple; font-size:24px; text-align:left; display:block;">Mentorship Programs</a>
        `
    }
];

let currentIndex = 0;

// Function to change background and content
function changeHeroContent() {
    const heroSection = document.querySelector('.hero');
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
    const heroLinks = document.getElementById('hero-links');

    // Add fade-out class to start the transition
    heroSection.classList.add('fade-out');

    // Wait for the fade-out transition to complete (1s in this case)
    setTimeout(() => {
        // Change the background image
        heroSection.style.backgroundImage = backgrounds[currentIndex];

        // Update text content
        heroTitle.textContent = content[currentIndex].title;
        heroDescription.textContent = content[currentIndex].description;
        heroLinks.innerHTML = content[currentIndex].links;

        // Remove fade-out and add fade-in class to show new content
        heroSection.classList.remove('fade-out');
        heroSection.classList.add('fade-in');

        // Cycle to the next content item
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }, 1000); // 1 second matches the CSS transition time
}

// Change content every 5 seconds
setInterval(changeHeroContent, 5000);














// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent default anchor behavior

            const targetId = this.getAttribute('href').slice(1);  // Get section ID (without the #)
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for the fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Navigation Bar
    const nav = document.querySelector('nav');
    const stickyOffset = nav.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > stickyOffset) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '&#9776;';  // Hamburger icon
    menuToggle.classList.add('menu-toggle');

    // Insert toggle button at the beginning of the nav
    nav.insertBefore(menuToggle, nav.firstChild);

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    // Back-to-Top Button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.classList.add('back-to-top');

    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 200) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

