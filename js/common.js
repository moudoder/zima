$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top + -50;
    let html_zoom = $('html').css('zoom');
    top = top * html_zoom;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");

  $('.questions-item').on('click', function() {
    if ($(this).hasClass('questions-item--another')) {

    }
    else{
      $(this).toggleClass('visible');
    }
    
  })

  $('.reviews-slider').slick({
  	infinite: true,
 	  slidesToShow: 2,
  	slidesToScroll: 1,
    prevArrow: $('.reviews-prev'),
    nextArrow: $('.reviews-next'),
  });

})