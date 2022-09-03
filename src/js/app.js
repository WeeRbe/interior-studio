import * as flsFunctions from "./modules/functions.js";
import "./modules/swipe.js";

flsFunctions.isWebp();


//Swiper
const swiper = new Swiper('.popular-slider', {
  autoHight: true,
  watchOverflow: true,
  slidesPerView: 1.07,
  loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    }
  });