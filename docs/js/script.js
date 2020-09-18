$(function () {
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".header__list").toggleClass("is-active")
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
  $('#footer__form').validate({
    rules: {
      name: {
        required: true,
        rangelength: [2, 18]
      },
      user_email: {
        required: true,
        email: true,
      },
    },
    messages: {
      lettersonly: "Please enter true name",
      name: 'This field is required',
      user_email: 'Enter a valid email',
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});
var mySwiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  slidesPerView: 'auto',
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1170: {
      slidesPerView: 3,
    },
  }
});
AOS.init({
  // disable:true,
  offset: 333,
  once: true,
  mirror: false,
});