const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");

let count = 0;
btn.addEventListener("click", function () {
  count++;
  if (count == 1) {
    one.textContent = search.value;
    search.value = "";
  }

  if (count == 2) {
    two.textContent = search.value;
    search.value = "";
  }

  if (count == 3) {
    three.textContent = search.value;
    search.value = "";
  }

  if (count == 4) {
    four.textContent = search.value;
    search.value = "";
  }
});
