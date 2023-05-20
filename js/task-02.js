const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const newIngridients = ingredients.map((element) => {
    const newElement = document.createElement('li');
    newElement.classList.add('item');
    newElement.textContent = element;
    console.log(newElement);
    return newElement    
    // console.log(listOfIngredients);
});
// console.log(newIngridients);
// categories.append(ingredientsList)
ingredientsList.append(...newIngridients)
// // console.log(listOfIngredients);