document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const errorIcon = document.getElementById('errorIcon');
    const email = emailInput.value;

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please provide a valid email';
        emailError.style.display = 'block';
        errorIcon.src = './images/icon-error.svg'; 
        errorIcon.style.display = 'inline'; 
        emailInput.classList.add('error'); 
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
        errorIcon.style.display = 'none'; 
        emailInput.classList.remove('error');
    }
});
