document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('submit', (event) => {
    event.preventDefault()
  let inputTask = document.getElementById('tasks').value
  let para = document.getElementById('p1')
    if (inputTask) {
      let taskList = document.getElementById('to_do_list');
      let newTask = document.createElement('li')
      newTask.innerText = inputTask
      taskList.addEventListener('click', (event) => {
      event.target.style.textDecoration = 'line-through';
      })
      to_do_list.appendChild(newTask)
      para.innerText = ''
      inputTask = ''
    } else {
      para.innerText = 'Error. The list cannot be empty'
    }
  })
})
