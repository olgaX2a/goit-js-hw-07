const categoriesRef = document.querySelectorAll("ul#categories li.item");
console.log("В списке", categoriesRef.length, "категории.");
categoriesRef.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    console.log("Категория:", categoryTitle);
    const categoryItems = category.querySelectorAll("li");
    console.log("Количество элементов:", categoryItems.length);
})