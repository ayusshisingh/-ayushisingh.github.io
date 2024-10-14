// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle active class for mobile navigation
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

// Reviews Slider Mouse Events
const reviewsSlider = document.querySelector('.reviews-slider');
reviewsSlider.addEventListener('mouseover', () => {
    reviewsSlider.style.animationPlayState = 'paused'; // Pause animation on mouse over
});
reviewsSlider.addEventListener('mouseout', () => {
    reviewsSlider.style.animationPlayState = 'running'; // Resume animation on mouse out
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if required fields are filled
    if (email === '' || message === '') {
        alert('Please fill in all required fields.');
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;

// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index); // Toggle active class
    });
}

// Show the initial testimonial
showTestimonial(testimonialIndex);

// Rotate testimonials every 5 seconds
setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length; // Move to next testimonial
    showTestimonial(testimonialIndex);
}, 5000);

// Reviews Slide
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.review-card');
    let currentSlideIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop to the first slide
        const offset = -currentSlideIndex * 100; // Calculate offset for translation
        sliderWrapper.style.transform = `translateX(${offset}%)`; // Move to the next slide
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});

// Expand Image Functionality
function toggleExpand(index) {
    const item = document.getElementById(`item${index}`);
    const isExpanded = item.classList.contains('expanded');

    // Close any currently expanded item
    document.querySelectorAll('.expanded').forEach(expItem => {
        expItem.classList.remove('expanded');
    });

    // Expand the clicked item if it is not already expanded
    if (!isExpanded) {
        item.classList.add('expanded');
    }
}

// Function to close the expanded view when clicking on it
function closeExpand(event, index) {
    event.stopPropagation(); // Prevent event from bubbling up to toggleExpand
    const item = document.getElementById(`item${index}`);
    item.classList.remove('expanded'); // Close the expanded item
}

// Open Lightbox
function openLightbox(imageElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const fullSizeSrc = imageElement.getAttribute("data-full-src");

    lightboxImg.src = fullSizeSrc;
    lightbox.style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Slider Looping
const slider = document.querySelector('.slider');
let scrollInterval;

function startSliderLoop() {
    scrollInterval = setInterval(() => {
        slider.scrollBy({
            left: 150,
            behavior: 'smooth'
        });

        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;  // Reset to the beginning
        }
    }, 2000); // Change the duration if needed
}

function stopSliderLoop() {
    clearInterval(scrollInterval);
}

// Start the loop when the page loads
window.onload = function() {
    startSliderLoop();

    // Pause the loop on hover
    slider.addEventListener('mouseenter', stopSliderLoop);
    slider.addEventListener('mouseleave', startSliderLoop);
};

// Trophy Rotation Interaction
document.querySelectorAll('.trophy').forEach(trophy => {
    let isDragging = false;
    let startX;
    let rotation = 0;

    trophy.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - rotation;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        rotation = e.pageX - startX;
        trophy.style.transform = `rotateY(${rotation}deg)`;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // For touch devices
    trophy.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - rotation;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        rotation = e.touches[0].pageX - startX;
        trophy.style.transform = `rotateY(${rotation}deg)`;
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
});
