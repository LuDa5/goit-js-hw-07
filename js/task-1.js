const itemCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("ul li").length;

  console.log(`itemCategories: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});