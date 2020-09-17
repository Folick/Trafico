$(function () {
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".header__menu-list").toggleClass("is-active")
  });
  $('a[href^="#"]').on('click', function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 600);
  });
  $('.faq__item-title').on('click', function () {
    $('.faq__item').removeClass('is-active');
    $(this).parent().addClass('is-active');
  });
  $('.clients__slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.61152 -1.25788e-05L5.40054e-07 6.17748L1 7.27834L1 7.35108L1.06607 7.35108L5.61152 12.355L7.0914 11.0086L3.76899 7.35108L29.5 7.35108L29.5 5.35108L3.45361 5.35108L7.0914 1.34638L5.61152 -1.25788e-05Z" fill="#ED4D47"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><svg width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8875 12.355L29.499 6.17749L28.499 5.07664V5.0039H28.433L23.8875 0L22.4076 1.3464L25.73 5.0039L-0.000976562 5.0039L-0.000976562 7.0039L26.0454 7.0039L22.4076 11.0086L23.8875 12.355Z" fill="#ED4D47" /></svg></button>',
    infinite: false,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
  });
});