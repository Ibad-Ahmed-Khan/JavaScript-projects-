const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const output = getComputedStyle(button).background;
    document.body.style.background = output;
  });
});
