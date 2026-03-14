// Animations reveal au scroll
const reveals = document.querySelectorAll('.reveal');

function reveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('show');
    } else {
      reveals[i].classList.remove('show');
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
// Delay dropdown
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
let timeoutId;

dropdown.addEventListener('mouseenter', () => {
  clearTimeout(timeoutId);
  dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
  timeoutId = setTimeout(() => {
    dropdownContent.style.display = 'none';
  }, 2000); // 2000 ms = 2 secondes
});