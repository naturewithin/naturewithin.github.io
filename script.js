// Add any JavaScript functionality here

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}

// Sticky header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const heroSection = document.querySelector('#hero');

  if (window.pageYOffset > heroSection.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});