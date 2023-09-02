import Swiper from "swiper";
import {Navigation} from 'swiper/modules'

export function initSliders() {
  const promoSlider = new Swiper('.prsl-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    loop: true,
    navigation: {
      prevEl: '.prsl-btn-prev',
      nextEl: '.prsl-btn-next',
    }
  });
}