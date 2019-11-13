document.addEventListener("DOMContentLoaded", () => {

let input = document.querySelector('#input')
let form = document.querySelector('form')
let list = document.querySelector('ul')
let text = document.querySelector('#input')

form.addEventListener("submit", () => {
  event.preventDefault()
  let listItem = document.createElement('li')
  if(input.value.trim() === "") {
    text.innerText = 'Please input a value'
  } else {
    listItem.innerText = input.value
    list.appendChild(listItem) 
    text.innerText = " "
    input.value = ""
    }
})
})