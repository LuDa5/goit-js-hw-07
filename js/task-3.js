const inputName = document.querySelector("#name-input");
const outpotName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    outpotName.textContent = inputValue !== "" ? inputValue : `Anonymous`;
})