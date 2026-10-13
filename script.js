// =========================================================
// Hive fx studioz — Homepage interactions
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Navbar background on scroll ---
  const nav = document.getElementById('mainNav');
  const toggleNavBg = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  toggleNavBg();
  window.addEventListener('scroll', toggleNavBg);

  // --- Auto-close mobile nav after clicking a link ---
  const navLinks = document.querySelectorAll('#navMenu .nav-link, #navMenu .btn');
  const navMenu = document.getElementById('navMenu');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        bsCollapse.hide();
      }
    });
  });

  // --- Footer year ---
  document.getElementById('year').textContent = new Date().getFullYear();

  // --- Contact form (placeholder submit handling — no backend wired up) ---
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Placeholder behaviour: replace with a real API call / form service.
    status.textContent = 'Thanks! Your message has been noted. (Placeholder — connect this form to your backend or a service like Formspree.)';
    form.reset();
    form.classList.remove('was-validated');
  });

});


/*Modal popup */

document.addEventListener("DOMContentLoaded", function () {

    const modalElement = document.getElementById("projectVideoModal");
    const videoFrame = document.getElementById("projectVideoFrame");

    const videoModal = new bootstrap.Modal(modalElement);

    document.querySelectorAll(".view-project").forEach(function (button) {

        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const videoUrl = this.dataset.video;

            if (!videoUrl) return;

            // Add autoplay to the selected YouTube video
            const separator = videoUrl.includes("?") ? "&" : "?";

            videoFrame.src = videoUrl + separator + "autoplay=1";

            videoModal.show();
        });

    });

    // Stop the video when the modal closes
    modalElement.addEventListener("hidden.bs.modal", function () {
        videoFrame.src = "";
    });

});
