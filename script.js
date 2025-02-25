const pwField = document.querySelector("#pw");
const pwToggleOn = document.querySelector("#toggle-pw-on");
const pwToggleOff = document.querySelector("#toggle-pw-off");

// Initially hide the password and show the closed eye icon
pwField.type = "password"; // Password is hidden by default
pwToggleOn.style.display = "none"; // Hide open eye
pwToggleOff.style.display = "inline"; // Show closed eye

pwToggleOff.addEventListener("click", () => {
  pwField.type = "text"; // Show password
  pwToggleOff.style.display = "none"; // Hide closed eye
  pwToggleOn.style.display = "inline"; // Show open eye
});

pwToggleOn.addEventListener("click", () => {
  pwField.type = "password"; // Hide password
  pwToggleOn.style.display = "none"; // Hide open eye
  pwToggleOff.style.display = "inline"; // Show closed eye
});

// toggle navbar on mobile view
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
