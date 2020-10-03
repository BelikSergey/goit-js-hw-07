'use strict';
const inputEl = document.querySelector('#validation-input');
// console.log(inputEl.classList);
let inputLength = 0;

inputEl.addEventListener('input', inputValue);

inputEl.addEventListener('blur', lossFocusInput);

// inputEl.addEventListener('focus', inFocusInput);

// console.log(inputEl.dataset.length);
// function inFocusInput() {
//   inputEl.classList.remove('valid');
//   inputEl.classList.remove('invalid');
// }

function inputValue(set) {
  inputLength = set.currentTarget.value.length;
  inputEl.classList.remove('valid');
  inputEl.classList.remove('invalid');
}

function lossFocusInput() {
  if (inputLength === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }

  //   console.log(inputLength);
  //   console.log(Number(inputEl.dataset.length));
  //   console.log(typeof inputLength);
  //   console.log(typeof Number(inputEl.dataset.length));
}

// console.log(inputEl.classList);
