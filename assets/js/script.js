document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // Initial check
});