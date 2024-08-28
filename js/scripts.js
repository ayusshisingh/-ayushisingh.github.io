//BootStrap

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



// JavaScript for Testimonial Slider
const slides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
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

// JavaScript to handle testimonial rotation
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
  
