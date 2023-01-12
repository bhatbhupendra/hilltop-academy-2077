/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));



//scroll


var myNav = document.getElementById('navMain__header');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10 ) {        //they say there is bug on some chrome verson so if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 )
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};





//pop up js

function removePopUp(){
    const crossButton = document.getElementById("popUpDiv");
    crossButton.style.opacity ="0";
    // crossButton.style.left = "-1000px";
    // crossButton.style.display = "none";
}
