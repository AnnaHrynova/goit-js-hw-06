
const allCategories = document.querySelector("#categories");
const allItems = allCategories.querySelectorAll(".item");

console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((oneItem) => {
    const itemName = oneItem.querySelector("h2").textContent;
    const allNames = oneItem.querySelectorAll("li");

    console.log(`Category: ${itemName}`);
    console.log(`Elements: ${allNames.length}`);
});