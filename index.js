// JavaScript for responsive menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('home-contact-btn');
    contactButton.addEventListener('click', function() {
      window.location.href = '/contact';     });
  });
  
document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('home-about-btn');
    contactButton.addEventListener('click', function() {
      window.location.href = '/about';     });
  });
  






















// index.js (front-end JavaScript)
document.querySelector('.contact-form form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevents page reload

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
      const response = await fetch('/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
      });

      const result = await response.json();
      showToast(result.message, result.success ? "success" : "error");
  } catch (error) {
      console.error("Error submitting form:", error);
      showToast("An unexpected error occurred.", "error");
  }
});

function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
      toast.remove();
  }, 3000);
}
















// Add event listener for form submission
document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevents page reload

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
      const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
      });

      const result = await response.json();
      showToast(result.message, result.success ? "success" : "error");
  } catch (error) {
      console.error("Error submitting form:", error);
      showToast("An unexpected error occurred.", "error");
  }
});

// Function to show the toast notification
function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
      toast.remove();
  }, 3000); // Remove the toast after 3 seconds
}
