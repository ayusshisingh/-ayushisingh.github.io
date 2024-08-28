// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// reviews Slide
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.review-card');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
        const offset = -currentIndex * 100; // Move to the next slide
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});

