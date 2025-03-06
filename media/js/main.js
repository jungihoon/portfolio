var swiper = new Swiper(".service-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  on: {
    breakpoint: function (swiper, breakpoint) {
      if (breakpoint >= 768) {
        swiper.navigation.disable();
      } else {
        swiper.navigation.enable();
      }
    },
  },
});
