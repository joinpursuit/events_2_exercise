document.addEventListener("DOMContentLoaded", () => {
  let h1 = document.createElement("h1");
  let form = document.createElement("form");
  let ul = document.createElement("ul");
  let userInput = document.createElement("input");
  let para = document.createElement("p")
  let submitButton = document.createElement("button");
  
  userInput.placeholder = "Type a todo";
  submitButton.innerText = "submit";
  submitButton.id = "button";
  

  h1.innerText = "My To-Dos"
  document.body.appendChild(h1);
  document.body.appendChild(form);
  document.body.appendChild(para)
  document.body.appendChild(ul);
  form.appendChild(userInput);
  form.appendChild(submitButton);

  form.addEventListener("submit",()=>{
    event.preventDefault()
    let listItem = document.createElement("li")
    if(userInput.value.trim() === ""){
      para.innerText = "Please enter text"
    } else {
      listItem.innerText = userInput.value
      ul.appendChild(listItem);
      para.innerText ="";
      userInput.value ="";
    }
    
    })
    ul.addEventListener( "click", () => {
      if (event.target.parentNode === ul) {
        event.target.style.textDecoration = 'line-through'
      }
  })

})