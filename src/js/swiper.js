let init = false
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 16,
        centerSlides: true,
        watchOverflow: true,
        slideToClickedSlide: true,
        sliderPerGroup: 'auto',
        
       
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        allowTouchMove: true,
      })
    }
  } else if (init) {
    swiper.destroy();
    init = false
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)