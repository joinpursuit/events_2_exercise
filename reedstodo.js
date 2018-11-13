document.addEventListener("DOMContentLoaded", () => {

let ul = document.getElementById("unordered-list")

let userInput = document.getElementById("userInput");
let button = document.getElementById("button");
let form = document.getElementById("form")

button.addEventListener("click", event => {
  event.preventDefault();
  let newNode = document.createElement("li")
  newNode.innerText = userInput.value;
  if(userInput.value.length > 0){
    ul.appendChild(newNode);
    form.reset();
  } else {
    let errormsg = document.createElement("p");
    errormsg.innerText = "Error! Please enter valid text";
    form.appendChild(errormsg)
  }
});

ul.addEventListener("click", event => {
  event.target.style.textDecoration = "line-through";
})

})
