// script.js

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
  
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
  
  // Responsive navigation menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function () {
    navigation.classList.toggle('open');
  });
  
  // Form submission handling
  const form = document.querySelector('#contact form');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Add your form submission logic here
  
    // Display a success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    form.appendChild(successMessage);
  
    // Reset the form
    form.reset();
  });