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
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    let scrollInterval;

    function startSliderLoop() {
        scrollInterval = setInterval(() => {
            slider.scrollBy({
                left: 150,
                behavior: 'smooth'
            });

            if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
                slider.scrollLeft = 0; // Reset to the beginning for continuous loop
            }
        }, 3000); // Adjust speed (slower)
    }

    function stopSliderLoop() {
        clearInterval(scrollInterval);
    }

    startSliderLoop();

    // Pause the loop on hover
    slider.addEventListener('mouseenter', stopSliderLoop);
    slider.addEventListener('mouseleave', startSliderLoop);
});
