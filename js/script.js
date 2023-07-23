// import i18next from 'i18next';


const elements = {
  navbar: document.querySelector('.header .navbar'),
  searchForm: document.querySelector('.header .search-form'),
  loginForm: document.querySelector('.header .login-form'),
  contactInfo: document.querySelector('.contact-info'),
};

const removeActiveClass = () => {
  Object.values(elements).forEach(el => el.classList.remove('active'));
};

document.querySelector('#menu-btn').onclick = () => {
  removeActiveClass();
  elements.navbar.classList.toggle('active');
};

// ... rest of your code

// Your chat widget ID
var chatWidgetId = "YOUR_CHAT_WIDGET_ID";
// Your chat widget language
var chatWidgetLanguage = "ar";

// The chat widget position
var chatWidgetPosition = "bottom-right";

// Load the chat widget script
document.addEventListener("DOMContentLoaded", function() {
  var chatWidgetScript = document.createElement("script");
  chatWidgetScript.src = "https://chatwidget.com/js/embed.js";
  chatWidgetScript.async = true;
  chatWidgetScript.onload = function() {
    var chatWidget = new ChatWidget({
      id: chatWidgetId,
      language: chatWidgetLanguage,
      position: chatWidgetPosition,
    });
  };
  document.body.appendChild(chatWidgetScript);
});


document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
  elements.searchForm.classList.toggle('active');
  elements.navbar.classList.remove('active');
  elements.loginForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
  elements.contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
  elements.contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});




var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});


