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
});
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});