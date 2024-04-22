const one = document.body.querySelector("#one");
const two = document.body.querySelector("#two");
const three = document.body.querySelector("#three");
const four = document.body.querySelector("#four");
const five = document.body.querySelector("#five");

const display = document.body.querySelector(".display");

const submit = document.body.querySelector("#submitBtn");

submit.addEventListener("click", () => {
    display.textContent = four.style.selected;
})