let share = document.querySelector(".share");
let shareSocials = document.querySelector(".share-socials");

share.addEventListener('click', function() {
  this.classList.toggle("active");
  shareSocials.classList.toggle("active");
});