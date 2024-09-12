// JavaScript source code

const tabLinkElements = document.querySelectorAll('.js-tab-links');
const tabContentElements = document.querySelectorAll('.js-tab-contents');
const tabDisplayElement = document.querySelector('.js-tab-display')

const tabNames = ['skills', 'experience', 'education', 'courses'];

function openTab(i) {
  tabContentElements.forEach((element) => element.classList.remove('active-tab'));
  tabLinkElements.forEach((element) => element.classList.remove('active-link'));

  tabContentElements[i].classList.add('active-tab');
  tabLinkElements[i].classList.add('active-link');
}

tabLinkElements.forEach((element, i) => { 
  element.addEventListener('click', () => {
    if (element.classList.contains('active-link')) {
      element.classList.remove('active-link');
      tabContentElements[i].classList.remove('active-tab')
    } else openTab(i);
  });
});

const workEntryElements = document.querySelectorAll('.js-work-entry');

workEntryElements.forEach((element) => {
  element.addEventListener('click', () => element.querySelector('.js-layer').classList.toggle('show-description'));
});

const sheetScriptURL = 'https://script.google.com/macros/s/AKfycbxQkvel-G6N1gU90a8WUn9aaaHkDL0FE_py4n5n9GlXDRc283CktpbXmh1Au08kC3oT/exec';
const contactForm = document.querySelector('.js-submit-to-sheet');
const contactSubmissionToast = document.querySelector('.js-form-submission-toast');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  fetch(sheetScriptURL, { method: 'POST', body: new FormData(contactForm) })
    .then(response => {
      console.log('Success!', response);
      contactSubmissionToast.classList.add('visible-toast');
      setTimeout(() => { contactSubmissionToast.classList.remove('visible-toast') }, 5000);
      contactForm.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

function changeNavBG() {

  var windowHeight = document.documentElement.clientHeight,
    docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ),
    currentScroll = window.scrollY;

  var scrollPercent = currentScroll / (docHeight - windowHeight) * 100;

  var navElement = document.querySelector("nav");
  if (scrollPercent > 13) {
    navElement.classList.remove("at-top");
  } else {
    navElement.classList.add("at-top");
  }
}

window.addEventListener("scroll", changeNavBG);

mobileMenuOpen = document.querySelector(".js-mobile-menu-open");
mobileMenuClose = document.querySelectorAll(".js-mobile-menu-close");
mobileMenu = document.querySelector(".js-mobile-menu")

mobileMenuOpen.addEventListener('click', () => {
  mobileMenu.style.right = '0';
})

mobileMenuClose.forEach((element) => {
  element.addEventListener('click', () => {
    mobileMenu.style.right = '-200px';
  });
});

  
