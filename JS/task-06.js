'use strict';
const inputEl = document.querySelector('#validation-input');
// console.log(inputEl.classList);
// let inputLength = 0;

inputEl.addEventListener('input', onInputValue);

inputEl.addEventListener('blur', onLossFocusInput);

// inputEl.addEventListener('focus', inFocusInput);

// console.log(inputEl.dataset.length);
// function inFocusInput() {
//   inputEl.classList.remove('valid');
//   inputEl.classList.remove('invalid');
// }

function onInputValue() {
  // set.currentTarget.value.length;
  // console.log(inputEl.value.length);
}

// function onLossFocusInput() {
//   if (inputLength === Number(inputEl.dataset.length)) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   }

//   //   console.log(inputLength);
//   //   console.log(Number(inputEl.dataset.length));
//   //   console.log(typeof inputLength);
//   //   console.log(typeof Number(inputEl.dataset.length));
// }
// if (inputEl.value.length === Number(inputEl.dataset.length))
// console.log(inputEl.classList);

function onLossFocusInput() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
