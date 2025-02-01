const ProjectPath = '';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

var swiper1 = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: false, 
  speed: 1500,
            parallax: true,
            loop: true,
            autoplay: {
                delay: 2500,
            },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
//   mousewheel: true,
//   keyboard: true,
//   clickable: true,
//   touchEventsTarget: 'container', 
});

//auto refresh code
const refresh = ()=>{
  if(window.location.hostname == "localhost"){
    window.location.reload();
  }
}
window.addEventListener("online",refresh);

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === 'visible') {
    refresh(); // Reloads the page when the document becomes visible
  }
});

new kursor({
  type: 4,
  color: '#1c4349'
});
function changeCursorColor(color) {
  document.querySelector('.kursor').style.borderColor = color;
}

// Example: Change cursor color when hovering over specific elements
document.querySelectorAll('.banner').forEach(element => {
  element.addEventListener('mouseenter', () => changeCursorColor('#fff'));
  element.addEventListener('mouseleave', () => changeCursorColor('#1c4349'));
});
document.querySelectorAll('header').forEach(element => {
  element.addEventListener('mouseenter', () => changeCursorColor('#fff'));
  element.addEventListener('mouseleave', () => changeCursorColor('#1c4349'));
});

document.querySelectorAll('.btn').forEach(element => {
  element.addEventListener('mouseenter', () => changeCursorColor('#fff'));
  element.addEventListener('mouseleave', () => changeCursorColor('#1c4349'));
});
document.querySelectorAll('.service').forEach(element => {
  element.addEventListener('mouseenter', () => changeCursorColor('#fff'));
  element.addEventListener('mouseleave', () => changeCursorColor('#1c4349'));
});

var swiper2 = new Swiper('.swiper-container', {
  slidesPerView: 2,
  breakpoints:{
    640:{
      slidesPerView:'auto'
    }
  },
  spaceBetween: 10,
  freeMode: true, // Enable Free Mode
  autoplay: {
    delay: 2500, // Set autoplay delay
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
  pagination: {
    // el: '.swiper-pagination',
    clickable: true,
  },
  // Add any other Swiper options you need
});

$(document).ready(function() {
  // Trigger the modal after 1 second of page load
  if(window.location.hostname != "localhost"){
    setTimeout(function() {
      $('#welcomeModal').modal('show');
    }, 1000);
  } 
});
