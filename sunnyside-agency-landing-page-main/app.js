let hamburger = document.getElementsByClassName("hamburger");
let menu_wrapper = document.getElementsByClassName("menu-wrapper");

hamburger[0].addEventListener("click", mobile_menu);

function mobile_menu() {
  hamburger[0].classList.toggle("hide");
  menu_wrapper[0].classList.toggle("show");
}
