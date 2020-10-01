'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsColectionEl = document.querySelector('#ingredients');

const elementsIngredientsColection = ingredients.map(element => {
  const liElement = document.createElement('li');
  liElement.textContent = element;
  return liElement;
});

// console.log(elementsIngredientsColection);
ingredientsColectionEl.append(...elementsIngredientsColection);
