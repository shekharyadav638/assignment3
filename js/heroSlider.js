(function ($, Drupal) {
  Drupal.behaviors.slickSlider = {
    attach: function (context, settings) {
      $('.slide', context).once('slickSlider').slick({
        infinite: true,
        autoplaySpeed: 1500,
        autoplay: true,
        slidesToShow: 1,
        adaptiveHeight: true,
      });
    },
  };
})(jQuery, Drupal);
