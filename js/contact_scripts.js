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
