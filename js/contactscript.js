document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block'; 
    
    setTimeout(() => {
        successMessage.classList.add('fade-out'); 
        setTimeout(() => {
            successMessage.style.display = 'none'; 
            document.getElementById('contact-form').reset(); 
        }); 
    }, 3000); 
});