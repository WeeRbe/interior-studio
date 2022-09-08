import * as flsFunctions from "./modules/functions.js";
import "./modules/swipe.js";

flsFunctions.isWebp();


//Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoHight: true,
  watchOverflow: true,
  slidesPerView: 1.174,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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


//Burger menu
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});