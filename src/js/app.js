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

  //DOM load event
window.addEventListener("DOMContentLoaded", () => {

  const spotlight = document.querySelector('.spotlight');

  let spotlightSize = 'transparent 160px, rgba(9, 9, 9, 0.85) 200px)';

  window.addEventListener('mousemove', e => updateSpotlight(e));

  window.addEventListener('mousedown', e => {

      spotlightSize = 'transparent 130px, rgba(9, 9, 9, 1) 150px)';

      updateSpotlight(e);

  });

  window.addEventListener('mouseup', e => {

      spotlightSize = 'transparent 160px, rgba(9, 9, 9, 1) 200px)';

      updateSpotlight(e);

  });

  function updateSpotlight(e) {
       
      spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 40}%, ${spotlightSize}`;

  }
});