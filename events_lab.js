document.addEventListener('DOMContentLoaded', () => {
  let submitButton = document.getElementById("button");
  document.addEventListener('submit', (event) => {
    event.preventDefault()
  let inputTask = document.getElementById("tasks").value
  let emptyStr = document.getElementById("tasks").value
    if (emptyStr === "") {
    window.alert('Error. The list cannot be empty')
    }
  let newTask = document.createElement("li")
  newTask.innerText = inputTask
  to_do_list.appendChild(newTask)
  })
  let taskList = document.getElementById('to_do_list');

  taskList.addEventListener('click', event => {
  newTask.style.textDecoration = "line-through";
  })
})
