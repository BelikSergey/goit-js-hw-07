'use strict';
const fontSizeControlEl = document.querySelector('#font-size-control');
// console.log(fontSizeControlEl);
const textEl = document.querySelector('#text');
// console.log('textEl', textEl);
fontSizeControlEl.addEventListener('change', onInputSizeControl);

// console.log(textEl.style.fontSize);

function onInputSizeControl(event) {
  console.log(event.currentTarget.value);
  //   console.log(textEl.style.fontSize);
  textEl.style.fontSize = event.currentTarget.value;
}
