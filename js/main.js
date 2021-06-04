  $(document).ready(function() {
      $('.slider__inner').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows:$('.container__arrow'),
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/slick_prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/slick_next.png" alt=""></button>',
      });


  });

$('.open-popup').click(function(e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(600);
});
$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(600);
});