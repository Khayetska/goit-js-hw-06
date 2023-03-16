const mainListEl = document.querySelector("#categories");
const numberOfCategories = mainListEl.children.length;
console.log("Number of categories:", numberOfCategories);

const ListItemEl = document.querySelectorAll(".item");

ListItemEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
