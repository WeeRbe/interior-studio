import * as flsFunctions from "./modules/functions.js";
import "./modules/swipe.js";

flsFunctions.isWebp();


//Swiper
const swiper = new Swiper('.popular-slider', {
  
  slidesPerView: 1.1,
  loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });