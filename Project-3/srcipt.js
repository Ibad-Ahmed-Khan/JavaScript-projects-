let increment = document.querySelector("#a");
let decrement = document.querySelector("#b");
let value = document.querySelector("#c");
let counter = 0;

value.textContent = counter;

increment.addEventListener("click", function () {
  value.textContent++;
});

decrement.addEventListener("click", function () {
  value.textContent--;
});
