document.addEventListener("DOMContentLoaded", () => {
  let h1 = document.createElement("h1");
  let _form = document.createElement("form");
  let ul = document.createElement("ul");
  let userInput = document.createElement("input");
  let submitButton = document.createElement("button");
  
  userInput.placeholder = "Type a todo";
  submitButton.innerText = "submit";
  submitButton.id = "button";
  

  h1.innerText = "My To-Dos"
  document.body.appendChild(h1);
  document.body.appendChild(_form);
  _form.appendChild(ul);
  _form.appendChild(userInput);
  _form.appendChild(submitButton);
  submitButton.addEventListener("click",()=>{
    
  })

})