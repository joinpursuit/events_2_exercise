document.addEventListener('DOMContentLoaded', () => {

let form = document.querySelector('form')
let todo = document.querySelector('#todo-list')

form.addEventListener('submit', function(event) {
  event.preventDefault()
    let li = document.createElement('li')
    let input = document.querySelector('input')
    li.innerText = input.value
    if (li.innerText !== "") {
      li.addEventListener("click" , (event) => {
          event.preventDefault()
          if (li.className !== "completed") {
            li.className = "completed"
          } else {
            li.className = "not-completed"
          }
      })
      todo.appendChild(li)
      input.value = ""
    } else {
    alert("stop it 5")
  }
  })
})

//   const configureButtonClickEvent = () => {
//   let text = document.querySelector("#toDoList").value
//   let list = document.createElement("li")
//   text.addEventListener("click", () => {
//     click.preventDefault()
//     list.innerText = text
//     document.body.appendChild(text)
// })
// }
