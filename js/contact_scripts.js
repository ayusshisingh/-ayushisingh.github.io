document.getElementById('contact-form').addEventListener('submit', function(event) {
    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(element => element.textContent = '');

    // Validate Name
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Valid email is required.';
        isValid = false;
    }

    // Validate Country
    const country = document.getElementById('country').value;
    if (!country) {
        document.getElementById('country-error').textContent = 'Country is required.';
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]+$/;
    if (!phone || !phonePattern.test(phone)) {
        document.getElementById('phone-error').textContent = 'Valid phone number is required.';
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (!message) {
        document.getElementById('message-error').textContent = 'Message is required.';
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
