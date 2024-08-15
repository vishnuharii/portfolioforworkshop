
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    if (email && message) {
       
        alert(' Your message has been sent successfully! Vishnu will get back to via email');
        
        
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
