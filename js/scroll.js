document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scroll-top');

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      // Show the button after scrolling down 200px
      scrollToTopButton.classList.add('active');
    } else {
      scrollToTopButton.classList.remove('active');
    }
  });

  // Smooth scroll to top on click
  scrollToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
