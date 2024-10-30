document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const name = contactForm.elements['name'].value;
            const email = contactForm.elements['email'].value;
            const message = contactForm.elements['message'].value;

            // Here you would typically send the data to a server,For this example, we'll just log it to the console.
            console.log('Form submitted:', { name, email, message });

            // Show a success message
            alert('Thank you for your message. We will get back to you soon!');

            // Reset the form
            contactForm.reset();
        });
    }

    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        document.querySelector('.background-overlay').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});
