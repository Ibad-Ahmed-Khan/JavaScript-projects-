const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const itemsContainer = document.getElementById("items-container");

let items = [];
btn.addEventListener("click", function (e) {
  console.log("event", e);
  e.preventDefault();
  // 0. Check if value is empty then just return
  // 1. Extract data that user has entered
  const value = input.value;

  if (value.trim().length == 0) return;
  // 2. Push the data into array
  items.push(value);
  itemsContainer.innerHTML = "";
  // 3. Now loop array and create `li` to update the DOM
  items.forEach((item, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    li.id = index;
    li.innerText = item;
    button.innerText = "Delete me";

    li.appendChild(button);

    button.addEventListener("click", function (e) {
      const index = e.target.id;
      items = items.filter((item, i) => i != Number(index));
      if (items.length == 1) items = [];
      li.innerText = "";
      console.log("clicked item", e);
    });

    itemsContainer.appendChild(li);

    // let count = 0;
    // items.forEach(() => {
    //   count++;
    //   if (count == 1) {
    //     const remove = document.createElement("button");
    //     remove.innerText = item;
    //     itemsContainer.appendChild(remove);
    //     remove.addEventListener("click", function () {
    //       el.innerText = "";
    //       remove.innerText = "";
    //     });
    //   }
    // });
  });
  console.log("value", input.value);
  // input.value = "";
});
