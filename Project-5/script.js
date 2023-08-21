const write = document.querySelector(".write");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

btn.addEventListener("click", function () {
  let x = document.getElementById("password");
  if (x.type === password) {
    x.type = "text";
  } else {
    x.type = "password";
  }
});

btn2.addEventListener("click", function () {
  let x = document.getElementById("password");
  if (x.type !== password) {
    x.type = "text";
  } else {
    x.type = "password";
  }
});
