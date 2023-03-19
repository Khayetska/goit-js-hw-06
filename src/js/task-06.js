const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validationAmountOfSymbols);

const dataLength = Number(inputEl.getAttribute("data-length"));

function handleValidationAmountOfSymbols(event) {
  if (event.target.value.length === dataLength) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
  }
  if (event.target.value.length === 0) {
    event.target.classList.remove("invalid", "valid");
  }
}
