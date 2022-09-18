import * as flsFunctions from "./modules/functions.js";
//import "./modules/swipe.js";


flsFunctions.isWebp();


//Swiper
const swiper = new Swiper('.swiper', {
  autoHight: true,
  watchOverflow: true,
  loop: true,
  breakpoints: {
    1440:{
      slidesPerView: 1.173
    },
    1024: {
      slidesPerView: 1.1881
    },
    768: {
      slidesPerView: 1.1745
    },
    375: {
      slidesPerView: 1.196
    },
  },
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


//Popup

const openPopUp = document.getElementById('open__popup');
const closePopUp = document.getElementById('popup__close');
const popUp = document.getElementById('popup');
const lockOwerflow = document.getElementById('lock');


openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
  lockOwerflow.classList.add('active');
})

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
  lockOwerflow.classList.remove('active');
})


import "./modules/onenewsswiper.js";

