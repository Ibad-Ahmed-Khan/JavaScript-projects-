document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: new FormData(document.getElementById("form")),
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
