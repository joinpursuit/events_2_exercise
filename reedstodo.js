document.addEventListener("DOMContentLoaded", () => {

let ul = document.getElementById("unordered-list")

let userInput = document.getElementById("userInput");
let button = document.getElementById("button");
let form = document.getElementById("form")
let h4 = document.getElementById("err4")

button.addEventListener("click", event => {
  event.preventDefault();
  h4.innerHTML = " "
  let newNode = document.createElement("li")
  newNode.innerText = userInput.value;
  let errormsg = document.createElement("p");
  errormsg.innerText = "Error! Please enter valid text";
  if(userInput.value.length === 0){
    h4.appendChild(errormsg);
  } else {
    ul.appendChild(newNode);
    form.reset();
  }
});

ul.addEventListener("click", event => {
  event.target.style.textDecoration = "line-through";
})

})
