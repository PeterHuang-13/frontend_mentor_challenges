let input = document.getElementById("email");
let submit = document.getElementById("submit");

submit.addEventListener('click', e => {
  e.preventDefault();

  let email = input.value;
  let elements = document.querySelectorAll(".valid");
  if (validate(email) == true) {
    elements.forEach( element => {
      element.classList.add("error");
    })
  } else {
    elements.forEach( element => {
      element.classList.remove("error");
    })
    alert("Thank you!");
    input.value = "";
  }
})

function validate(value) {
  let atPos = value.indexOf('@');
  let dotPos = value.lastIndexOf('.');

  if (atPos<2 || dotPos<atPos+2 || dotPos+2>=value.length) {
    return true; // trigger if statement
  }
}