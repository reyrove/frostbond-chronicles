document.addEventListener("DOMContentLoaded", function () {
  // ---- Back to top ----
  const backToTopButton = document.getElementById('backToTop');
  if (backToTopButton) {
    function updateButtonVisibility() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      backToTopButton.classList.toggle('visible', scrollTop > 400);
    }
    backToTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', updateButtonVisibility);
    updateButtonVisibility();
  }

  // ---- Reading progress bar ----
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }
});