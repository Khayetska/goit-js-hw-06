const fontSizeControlInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = fontSizeControlInputEl.value + "px";

const handleInputChange = (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControlInputEl.addEventListener("input", handleInputChange);
