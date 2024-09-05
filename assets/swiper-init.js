import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
    loopAdditionalSlides: 5,
    direction: 'horizontal',
    reverseDirection: true,
  });
});