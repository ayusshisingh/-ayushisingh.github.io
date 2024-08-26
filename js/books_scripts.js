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
// Testimonial Slide

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 3000); // Slide every 3 seconds

    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    // Pause the slider on mouseover
    document.getElementById('testimonial-slider').addEventListener('mouseover', function() {
        clearInterval(slideInterval);
    });

    // Resume the slider on mouseout
    document.getElementById('testimonial-slider').addEventListener('mouseout', function() {
        slideInterval = setInterval(nextSlide, 3000);
    });

    // Initialize the first slide as active
    slides[currentIndex].classList.add('active');
});
