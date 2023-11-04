function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const backColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    backColor.textContent = randomColor;

});