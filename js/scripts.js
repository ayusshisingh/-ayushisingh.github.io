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
const slider = document.querySelector('.reviews-slider');
slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused'; // Pause animation on mouse over
});
slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running'; // Resume animation on mouse out
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
let currentIndex = 0;

// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index); // Toggle active class
    });
}

// Show the initial testimonial
showTestimonial(currentIndex);

// Rotate testimonials every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length; // Move to next testimonial
    showTestimonial(currentIndex);
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
function openLightbox(imgElement) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = 'flex';
    lightboxImg.src = imgElement.src;
  }
  
  // Close Lightbox
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  

  // Open modal and show the selected image
function openModal(index) {
    document.getElementById("imageModal").style.display = "block";
    currentSlide(index + 1);
}

// Close modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

let slideIndex = 1;

// Show specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show next/previous slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to display the correct slide
function showSlides(n) {
    let slides = document.getElementsByClassName("modal-slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
