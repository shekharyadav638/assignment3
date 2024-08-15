jQuery(document).ready(() => {
  jQuery('.slider').slick({
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    slidesToShow: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
