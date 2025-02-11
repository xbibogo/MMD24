// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Function to validate password length
function validatePassword(password) {
  return password.length >= 6;
}

// Function to validate the login form
function validateLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let valid = true;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    valid = false;
  }

  if (!validatePassword(password)) {
    alert("Password must be at least 6 characters long.");
    valid = false;
  }

  return valid;
}

// Add event listener to the form
document.querySelector("form").addEventListener("submit", function (event) {
  if (!validateLoginForm()) {
    event.preventDefault();
  }
});
