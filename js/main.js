$(function () {

  var mixer = mixitup('.directions__list');

  $('.ditections__btn').on('click', function () {
    $('.ditections__btn').removeClass('ditections__btn_active')
    $(this).addClass('ditections__btn_active')
  });



  $('.team__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    draggable: false,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          dots: true,
          appendDots: $('.team__dots')
        }
      }
  ]});

  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  });

  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  });



  $('.reviews__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    draggable: false,
    appendDots: $('.reviews__dots'),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          draggable: true
        }
      }
  ]});

  $('.reviews__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  });

  $('.reviews__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  });


  
  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link_active')) {
      $(this).removeClass('program__acc-link_active')
      $(this).children('.program__text').slideUp()
    } else {
      $('.program__acc-link').removeClass('program__acc-link_active')
      $('.program__text').slideUp()
      $(this).addClass('program__acc-link_active')
      $(this).children('.program__text').slideDown()
    }
  });



  $(".header__nav-item a, .header__top-btn, .footer__go-top, .footer__top-item a, .footer__logo").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  });



  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top_open') === false) {
      $('.burger').addClass('burger_follow')
    } else {
      $('.burger').removeClass('burger_follow')
    }
  }, 0);

  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top_open')
    $('.overlay').toggleClass('overlay_show')
  });


  $('.footer__top-title_slide').on('click', function () {
    $(this).next().slideToggle()
  });

})