// js/animations.js

const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    logo.classList.add('animate');
  } else {
    logo.classList.remove('animate');
  }
});