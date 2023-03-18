const input = document.querySelector("#name-input");
const gretting = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  gretting.textContent = event.currentTarget.value;
  if (gretting.textContent === "" || input.value[0] === " ") {
    gretting.textContent = "Anonymous";
  }
});
