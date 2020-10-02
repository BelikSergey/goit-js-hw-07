'use strict';
const inputFormEl = document.querySelector('#name-input');
// console.log(inputFormEl);
const outputEl = document.querySelector('#name-output');
// console.log(outputEl);
inputFormEl.addEventListener('input', inputName);

function inputName(line) {
  line.currentTarget.value != ''
    ? (outputEl.textContent = line.currentTarget.value)
    : (outputEl.textContent = 'незнакомец');
}
