const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const allIngredients = document.querySelector("#ingredients");

const ingredientNames = ingredients.map(ingredient => {
    const ingredientName = document.createElement("li");
    
    ingredientName.textContent = ingredient;
    ingredientName.classList.add("item");

    return ingredientName;
});

allIngredients.append(...ingredientNames);