const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.getElementById("ingredients")
const ingredientsItems = ingredients.map(ingredient => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  return liItem
})
ingredientsListRef.append(...ingredientsItems)