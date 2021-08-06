const acc = document.getElementsByClassName("accordion");

// Accordins effect
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    hideAll(this);

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.margin = null;
    } else {
      panel.style.maxHeight = (panel.scrollHeight)+ 16 + "px";
      panel.style.margin = "0rem 0rem 1rem 0rem";
    }
  });

  // box move when mouse over the accordins
  const box_img = document.getElementsByClassName("box");
  acc[i].addEventListener("mouseover", e => {
    box_img[0].classList.add("active");
  })
  acc[i].addEventListener("mouseout", e => {
    box_img[0].classList.remove("active");
  })

}

// accordions auto close function
function hideAll (exceptThis) {
  for (let i = 0; i < acc.length; i++) {
    if (acc[i] !== exceptThis) {
      acc[i].classList.remove("active");
      let panel = acc[i].nextElementSibling;
      panel.style.maxHeight = null;
      panel.style.margin = null;      
    }
  }
}