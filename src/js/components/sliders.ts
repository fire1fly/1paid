import Swiper from "swiper";
import {Navigation, Autoplay, Pagination} from 'swiper/modules'

export function initSliders() {
  const promoSlider = new Swiper('.prsl-slider', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 10000
    },
    navigation: {
      prevEl: '.prsl-btn-prev',
      nextEl: '.prsl-btn-next',
    },
    pagination: {
      el: '.swiper-pagination.prsl-pag',
      clickable: true,
      bulletClass: 'prsl-pag-item',
      bulletActiveClass: 'prsl-pag-item-active',
    }
  });
}