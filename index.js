document.addEventListener("DOMContentLoaded", () => {
  let h1 = document.createElement("h1");
  let ul = document.createElement("ul");
  let userInput = document.createElement("input");
  let submitButton = document.createElement("button");
  userInput.innerText = "Type a todo"
  submitButton.innerText = "submit"

  h1.innerText = "My To-Dos"
  document.body.appendChild(h1);
  document.body.appendChild(ul);
  document.body.appendChild(userInput);
  document.body.appendChild(submitButton);

})