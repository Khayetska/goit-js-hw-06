const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ListEl = document.querySelector("#ingredients");

const arreyOfItems = ingredients.map((ingredient) => {
  const ItemEl = document.createElement("li");
  ItemEl.classList.add("item");
  ItemEl.textContent = ingredient;

  return ItemEl;
});

ListEl.append(...arreyOfItems);
