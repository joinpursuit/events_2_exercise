document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector('#input')
  let form = document.querySelector('form')
  let list = document.querySelector('ul')
  let para = document.querySelector('#message')
  form.addEventListener("submit", () => {
    event.preventDefault()
    let listItem = document.createElement('li')
    if(input.value.trim() === "") {
      para.innerText = 'Please input a value'
    } else {
      listItem.innerText = input.value
      list.appendChild(listItem)
      para.innerText = " "
      input.value = ""
      }
  })
  list.addEventListener("click", () => {
  event.target.style.textDecoration = 'line-through'
  })
})
