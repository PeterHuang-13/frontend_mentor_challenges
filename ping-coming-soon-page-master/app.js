let input = document.querySelector('main form input');
let submit = document.querySelector('main form button');

// identify screen width to determine the id name
let screenWidth = document.body.clientWidth;
let idName = getIdName(screenWidth);

// event listener of entering the email
input.addEventListener('click', e => {
  e.preventDefault()

  // clear the content
  document.getElementById('errorMobile').textContent = '';
  document.getElementById('errorDesktop').textContent = '';

  let error = document.getElementById(idName);
  error.textContent = '';
  e.target.parentElement.children[0].style.borderColor = 'hsl(223, 100%, 88%)';
})

// event listener of press submit button
submit.addEventListener('click', e => {
  e.preventDefault()

  let form = e.target.parentElement;;
  let input = form.children[0];
  let email = input.value;
  if (validate(email)) {
    // change the input border color
    input.style.borderColor = 'hsl(354, 100%, 66%)';
  } else {
    input.value = ''
    alert('Thank you!')
  }
})

function getIdName(screenWidth) {
  if (screenWidth < 766) {
    return 'errorMobile';
  } else {
    return 'errorDesktop';
  }
}

function validate(value) {
  let error = document.getElementById(idName)

  let atPos = value.indexOf('@');
  let dotPos = value.lastIndexOf('.');

  if (value === '') {
    error.textContent = 'Whoops! It looks like you forgot to add your email'
    return true;
  } else if (atPos<2 || dotPos<atPos+2 || dotPos+2>=value.length) {
    console.log(`atPos:${atPos}, dotPos:${dotPos}`);
    error.textContent = 'Please provide a valid email address.'
    return true; // trigger the if statement
  } else {
    error.textContent = ''
  }
}