const bill = document.getElementById("bill");
const tipBtn = document.querySelectorAll(".btn-tip");
const tipCustom = document.getElementById("custom");
const people = document.getElementById("people");
const errorMsg = document.getElementsByClassName("error-msg");
const results = document.getElementsByClassName("value");
const resetBtn = document.getElementsByClassName("btn-reset");

bill.addEventListener("input", setBillValue); // set bill value when input
// get the tip%
tipBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    // deal with class
    this.classList.add("btn-active");
    clearBtnActive(this);

    tip = parseFloat(this.innerHTML) / 100; //get the tip

    tipCustom.value = ""; //clear the custom tip

    calculateAmount(); //calculate the tip
  })
);
tipCustom.addEventListener("input", setCustomTip);
people.addEventListener("input", setPeopleNum);
resetBtn[0].addEventListener("click", reset);

let billValue = 0.0;
let tip = 0.15;
let peopleNum = 1;

//input regex
function validateFloat(value) {
  let rgx = /^\d*\.?\d*$/;
  return value.match(rgx);
}
function validateInt(value) {
  let rgx = /^\d*$/;
  return value.match(rgx);
}

// set bill value
function setBillValue() {
  if (!validateFloat(bill.value)) {
    bill.value = bill.value.substring(0, bill.value.length - 1);
  }
  billValue = parseFloat(bill.value);
  people.value = 1;
  calculateAmount();
  resetBtn[0].classList.add("reset-active");
}

// remove the class of buttons which was not be clicked
function clearBtnActive(exceptThis) {
  for (let i = 0; i < tipBtn.length; i++) {
    if (tipBtn[i] !== exceptThis) {
      tipBtn[i].classList.remove("btn-active");
    }
  }
}

// set custom tip input
function setCustomTip() {
  if (!validateInt(tipCustom.value)) {
    tipCustom.value = tipCustom.value.substring(0, tipCustom.value - 1);
  }
  if (tipCustom.value !== "") {
    tip = parseFloat(tipCustom.value) / 100;
    calculateAmount();
  }
  resetBtn[0].classList.add("reset-active");
}

// set people number
function setPeopleNum() {
  if (!validateInt(people.value)) {
    people.value = people.value.substring(0, people.value.length - 1);
  }
  peopleNum = parseFloat(people.value);

  if (peopleNum <= 0) {
    errorMsg[0].classList.add("show-error-msg");
  } else {
    errorMsg[0].classList.remove("show-error-msg");
  }

  calculateAmount();
  resetBtn[0].classList.add("reset-active");
}

// calculate tip and total amount
function calculateAmount() {
  if (peopleNum >= 1) {
    let tipAmount = (billValue * tip) / peopleNum;
    let total = (billValue * (tip + 1)) / peopleNum;
    results[0].innerHTML = "$" + tipAmount.toFixed(2);
    results[1].innerHTML = "$" + total.toFixed(2);
  }
}

// reset button
function reset() {
  // set bill value is 0.0
  bill.value = "0.0";
  setBillValue();

  tipBtn[2].click(); // default tip

  people.value = "1"; // default people number
  setPeopleNum();
}
