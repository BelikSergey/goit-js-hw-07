'use strict';
const categoryListEl = document.querySelector('#categories');

const categoryList = [...categoryListEl.children];

console.log(`В списке ${categoryList.length} категории.`);

const infoNameCategory = categoryList.forEach(el => {
  console.log(el.firstElementChild.textContent);

  console.log(el.lastElementChild.children.length);
});
