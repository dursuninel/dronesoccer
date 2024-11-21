$(".bar").click(function () {
  $(".header_links, .header_overlay").addClass("open");
});
$(".header_overlay").click(function () {
  $(".header_links, .header_overlay").removeClass("open");
});

var news_slider = new Swiper(".news_slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

var teams_slider = new Swiper(".teams_slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: '.teams_arrow_right',
    prevEl: '.teams_arrow_left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
;
