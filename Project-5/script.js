const write = document.querySelector(".write");
const btn = document.querySelector(".btn");
const li = document.querySelector("li");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

let count = 0;

btn.addEventListener("click", function () {
  count++;
  if (count == 1) {
    li.textContent = write.value;
    write.value = "";
  }
  if (count == 2) {
    two.textContent = write.value;
    write.value = "";
  }

  if (count == 3) {
    three.textContent = write.value;
    write.value = "";
  }
});
