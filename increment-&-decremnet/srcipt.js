// Display a number (starting at 0) and two buttons labeled "Increase" and "Decrease".
// When the "Increase" button is clicked, the number should increase by 1.
// When the "Decrease" button is clicked, the number should decrease by 1.

let increment = document.querySelector("#a");
let decrement = document.querySelector("#b");
let value = document.querySelector("#c");
let counter = 0;

value.textContent = counter;

increment.addEventListener("click", function () {
  value.textContent = Number(value.textContent) + 1;
});

decrement.addEventListener("click", function () {
  value.textContent--;
});
