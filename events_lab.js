document.addEventListener('DOMContentLoaded', createList)

function createList () {
  let toDoList = document.getElementById('todo_list')
  let newItem = document.createElement('li')
  let inputStr = document.getElementById('element').value
  newItem.innerText = inputStr
  todo_list.appendChild(newItem)
  console.log('can you see this')
}
