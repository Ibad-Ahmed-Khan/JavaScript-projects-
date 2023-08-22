let todos = [];

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoValue = todoInput.value.trim();

  if (todoValue) {
    todos.push(todoValue);
    renderTodos();
  }

  todoInput.value = ""; // Clear the input field
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // Clear the list

  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement("li");
    todoItem.textContent = todos[i];

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
      removeTodo(i);
    };

    todoItem.appendChild(removeBtn);
    todoList.appendChild(todoItem);
  }
}
