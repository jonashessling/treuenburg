// Funktion um Navbar Hintergrung zu geben, wenn gescrolled wird
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

// Funktion um Sidebar von Bootstrap nach klicken eines Links zu schließen
document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById('offcanvasNavbar');
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  document.querySelectorAll('#offcanvasNavbar a').forEach(link => {
    link.addEventListener('click', function () {
      if (offcanvasElement.classList.contains('show')) {
        offcanvas.hide();
      }
    });
  });
});