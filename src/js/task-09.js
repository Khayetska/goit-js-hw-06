function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorTextEl = document.querySelector(".color");
const changeColorBtnEL = document.querySelector(".change-color");

const handleColorChange = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = getRandomHexColor();
};

changeColorBtnEL.addEventListener("click", handleColorChange);
