

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", () => {
  inputEl.classList.remove("valid", "invalid");
});

inputEl.addEventListener("blur", () => {
    const inputLength = inputEl.value.length;
    const dataLength = Number(inputEl.dataset.length);
    
  if (inputLength === dataLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (inputLength === 0) {
    inputEl.classList.remove("valid", "invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
}
});

