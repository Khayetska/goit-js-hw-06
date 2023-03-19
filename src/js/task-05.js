const inputEl = document.querySelector("#name-input");
const grettingEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  grettingEl.textContent = event.currentTarget.value;
  if (grettingEl.textContent === "" || inputEl.value[0] === " ") {
    grettingEl.textContent = "Anonymous";
  }
});
