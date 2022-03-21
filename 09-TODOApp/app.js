function createTodoItem(text) {
  const todo = document.createElement("li")
  todo.className = "todo-item"

  const span = document.createElement("span")
  span.className = "item"
  span.textContent = text

  const btn = document.createElement("button")
  btn.className = "closeBtn"
  btn.textContent = "X"

  todo.appendChild(span)
  todo.appendChild(btn)

  return todo
}

function addItemInContainer(container, input) {
  if (input.value.trim() !== "") {
    const todo = createTodoItem(input.value)
    container.insertAdjacentElement("afterbegin", todo)
  }

  input.value = ""
  input.focus()
}

function addTodo() {
  const container = document.querySelector(".todo-list")
  const input = document.querySelector("#taskInput")
  addItemInContainer(container, input)
}

document.querySelector("#addBtn").addEventListener("click", addTodo)

document.querySelector("#taskInput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo()
  }
})

// 事件委任 event delegation
document.querySelector(".todo-list").addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    e.target.parentElement.remove()
  }
})