function setDate() {
  const now = newDate();
  const sec = now.getSeconds();
  const secondsDegree = (sec / 60) * 360;
  const second = document.getElementById("#sec");
  second.style.transform = `rotate(${secondsDegree}deg)`;
  console.log(sec);
}
setInterval(setDate, 1000);
