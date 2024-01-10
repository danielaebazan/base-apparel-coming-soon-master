const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const submitButton = document.querySelector('.submit-btn');

emailForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const email = emailInput.value.trim(); // Remove extra whitespace

  if (!email) {
    errorMessage.textContent = 'Please provide an email address';
    errorMessage.style.display = 'block'; // Show error message

    // Reset button content if email is invalid
    submitButton.innerHTML = '<img src="./images/icon-arrow.svg" alt="Submit">';
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = 'Please provide a valid email';
    errorMessage.style.display = 'block'; // Show error message

    // Reset button content if email is invalid
    submitButton.innerHTML = '<img src="./images/icon-arrow.svg" alt="Submit">';
  } else {
    errorMessage.style.display = 'none'; // Hide error message if valid email
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
