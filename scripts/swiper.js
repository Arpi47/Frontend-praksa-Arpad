const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1350: {
      slidesPerView: 5,
    },
    1130: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    }
  }
});

