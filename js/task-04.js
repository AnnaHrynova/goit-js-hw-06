let counterValue = 0;

const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');
const currentValue = document.querySelector("#value");

const decrementClick = () => {
    counterValue -= 1;
    currentValue.textContent = counterValue;
};

buttonMinus.addEventListener("click", decrementClick);


const incrementClick = () => {
    counterValue += 1;
    currentValue.textContent = counterValue;
};

buttonPlus.addEventListener("click", incrementClick);
