const swiper = new Swiper('.swiper', {
  // Optional parameters

  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30, 
  autoplay: {
    delay:2000,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    }
  }
});