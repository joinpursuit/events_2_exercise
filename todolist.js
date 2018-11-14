document.addEventListener("DOMContentLoaded", () => {
let newUl = document.querySelector("ul")
let button = document.querySelector(".sub")
let submit = document.querySelector(".int")
let res = document.querySelector(".reset")
button.addEventListener("click", (event)=> {

  let newInput = document.createElement("li")
  newInput.innerText = submit.value
  newUl.appendChild(newInput)
  event.preventDefault();
  res.reset();
})


})
