
// MENU HAMBURGUESA

document.querySelector(".bars__menu, .drop_down_menu_container").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let drop_down_menu_container = document.querySelector(".drop_down_menu_container");


function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    drop_down_menu_container.classList.toggle("drop_down_menu__active");

}

// RECOGER EL MENU AL HACER CLICK EN UNA OPCIÓN

const routerButtons = document.querySelectorAll('.router_button');


routerButtons.forEach(button => {
  button.addEventListener('click', () => {

drop_down_menu_container.classList.remove('drop_down_menu__active');
    
    line1__bars.classList.remove('activeline1__bars-menu');
    line2__bars.classList.remove('activeline2__bars-menu');
    line3__bars.classList.remove('activeline3__bars-menu');
  });
});