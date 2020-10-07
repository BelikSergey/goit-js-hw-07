'use strict';
const divBoxesEl = document.querySelector('#boxes');
console.log(divBoxesEl);
const inputEl = document.querySelector('#controls input');
console.log(inputEl);
const buttonRenderEl = document.querySelector('[data-action="render"]');
console.log(buttonRenderEl);
const buttonDestroyEl = document.querySelector('[data-action="destroy"]');
console.log(buttonDestroyEl);

// controlsButtonsEl.addEventListener('click', onCreateBoxes);

function onCreateBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let divEl = document.createElement('div');
    divEl.style.backgroundColor();
    divEl.style.width('100px');
    divEl.style.height('100px');
    // createColor()
  }
  divBoxesEl.appendChild(divEl);
}

// function createColor() {
//   style =
//     'background-color: ' +
//     '#' +
//     (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
//   document.getElementById('container').appendChild(div);
// }
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// function onClick() {
//   const div = document.createElement('div');
//   div.classList.add('box');
//   div.style =
//     'background-color: ' +
//     '#' +
//     (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
//   document.getElementById('container').appendChild(div);
// }

// document.querySelector('button').addEventListener('click', onClick);

// for (let i = 5; i > 0; i--) onClick();
