let input = document.getElementsByClassName("input-container");
let submit = document.getElementById("submit")

submit.addEventListener("click", e => {
  e.preventDefault();

  let test = 0;
  // test whether string is empty
  for (let element of input) {
    let value = element.children[0].value;
    test += empty_validation(value, element);
  }

  // test whether email is correct
  let element = input[2]
  let email_value = element.children[0].value;
  if (email_value !== "") {
    test += email_validation(email_value, element);
  }  

  // alert and clear input if all input is correct
  if (test == 5) {
    alert("Thank you!")
    for (let element of input) {
      element.children[0].value = "";
    }
  }
})

function empty_validation (value, element) {
  if (value == "") {
    element.children[1].classList.add("error");
    element.children[2].classList.add("error");
    return 0;
  } else {
    element.children[1].classList.remove("error");
    element.children[2].classList.remove("error");
    return 1;
  }
}

function email_validation(value, element) {
  let atPos = value.indexOf('@');
  let dotPos = value.lastIndexOf('.');

  if ((atPos<2 || dotPos<atPos+2 || dotPos+2>=value.length) & value !=="") {
    element.children[1].classList.add("error");
    element.children[3].classList.add("error");
    return 0;
  } else {
    element.children[1].classList.remove("error");
    element.children[3].classList.remove("error");
    return 1;
  }
}
