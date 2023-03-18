const counterEl = document.querySelector("#counter");
const decrementBtnEl = document.querySelector(
  "button[data-action='decrement']"
);
const incrementBtnEl = document.querySelector(
  "button[data-action='increment']"
);
const valueEl = document.querySelector("#value");

decrementBtnEl.addEventListener("click", handleDecrementBtnEl);
incrementBtnEl.addEventListener("click", handleIncrementBtnEl);

let counterValue = 0;
let step = 1;

function handleDecrementBtnEl() {
  counterValue -= step;
  valueEl.textContent = counterValue;
}
function handleIncrementBtnEl() {
  counterValue += step;
  valueEl.textContent = counterValue;
}
