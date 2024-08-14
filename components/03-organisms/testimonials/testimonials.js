import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {
  $('.slider').slick({
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    slidesToShow: 2,
    dots: true,
  });
});
