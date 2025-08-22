const swiper = new Swiper('.swiper', {
  // Optional parameters

  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30, 
  autoplay: {
    delay:2000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});