
document.querySelector(".bars__menu, .drop_down_menu_container").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let drop_down_menu_container = document.querySelector(".drop_down_menu_container")

function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    drop_down_menu_container.classList.toggle("drop_down_menu__active");
}

