import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {
  $('.slideeee').slick({
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});
