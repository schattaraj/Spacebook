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
// const refresh = ()=>{
//   if(window.location.hostname == "localhost"){
//     window.location.reload();
//   }
// }
// window.addEventListener("online",refresh);

// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === 'visible') {
//     refresh(); // Reloads the page when the document becomes visible
//   }
// });

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
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loopAdditionalSlides: 1,
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  // },
  // speed: 1000, // Adjust the speed as needed
  // grabCursor: true, // Optional: makes it more user-friendly
  // pagination: {
  //   // el: '.swiper-pagination',
  //   clickable: true,
  // },
  // Add any other Swiper options you need
});
var swiper3 = new Swiper('.swiper-testimonial', {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true, // Enable Free Mode
  autoplay: {
    delay: 2500, // Set autoplay delay
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper4 = new Swiper('.swiper-our-team', {
  slidesPerView: 1,
  breakpoints:{
    640:{
      slidesPerView:3
    }
  },
  spaceBetween: 30,
  freeMode: true, // Enable Free Mode
  autoplay: {
    delay: 2500, // Set autoplay delay
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
});
$(document).ready(function() {
  // Trigger the modal after 1 second of page load
  if(window.location.hostname != "localhost" && window.location.hostname != '127.0.0.1'){
    setTimeout(function() {
      $('#welcomeModal').modal('show');
    }, 1000);
  } 

  let menus = document.querySelectorAll("header .navbar .nav-item .nav-link");
for (let index = 0; index < menus.length; index++) {
  const element = menus[index];
  if(window.location.href == element.href){
    element.parentElement.classList.add("active");
  }
  
}

});
