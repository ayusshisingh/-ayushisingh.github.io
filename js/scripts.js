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

const slider = document.querySelector('.reviews-slider');
slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused';
});
slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running';
});

// JavaScript for form validation (Optional if using HTML5 validation)
document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Example of additional form validation
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (email === '' || message === '') {
        alert('Please fill in all required fields.');
        event.preventDefault();
    }
});

// JavaScript for Testimonial Slider
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

// Function to show the slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Show the initial slide
showSlide(currentSlide);

// Testimonial rotation
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('active'); // Hide current testimonial
        currentIndex = (currentIndex + 1) % testimonials.length; // Move to next testimonial
        testimonials[currentIndex].classList.add('active'); // Show next testimonial
    }

    // Initial display setup
    testimonials[currentIndex].classList.add('active'); // Show the first testimonial

    // Rotate testimonials every 5 seconds
    setInterval(showNextTestimonial, 5000);
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
// Function to expand and display the image in full-size along with title
function toggleExpand(index) {
    const item = document.getElementById(`item${index}`);
    const isExpanded = item.classList.contains('expanded');

    // Close any currently expanded image before opening a new one
    const expandedItems = document.querySelectorAll('.expanded');
    expandedItems.forEach(expItem => {
        expItem.classList.remove('expanded');
    });

    if (!isExpanded) {
        item.classList.add('expanded');
    }
}

// Function to close the expanded view
function closeExpand(event, index) {
    event.stopPropagation(); // Stop the event from triggering the toggleExpand
    const item = document.getElementById(`item${index}`);
    item.classList.remove('expanded');
}