document.addEventListener('DOMContentLoaded', function () {
  // Get the end value from the data attribute
  var endValue = document
    .getElementById('counter')
    .getAttribute('data-countup-end');

  // Initialize CountUp
  var countUp = new CountUp('counter', endValue);
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
});
