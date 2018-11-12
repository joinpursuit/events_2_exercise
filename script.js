document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('.addForm');
  let list = document.querySelector('.todoList');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let newItem = document.createElement('li');
    newItem.id = 'item'
    let userInput = document.querySelector('#submit').value;
    let pError = document.querySelector('.error');

    if (userInput) {
      newItem.innerHTML = userInput+`<span><button type="button" name="button" id="del">x</button></span>`;
      list.appendChild(newItem);
      pError.innerText = "";
    } else {
      pError.innerText = "Empty input, try again."
    }
    form.reset();
  })

  list.addEventListener('click', (event) => {
    if (event.target.id === "item") {
      event.target.style["text-decoration"] = "line-through";
    } else if (event.target.id === "del") {
      if (event.target.parentNode.parentNode.style["text-decoration"]==="line-through") {
        event.target.parentNode.parentNode.remove();
      } else {
        window.alert("ERROR: cannot delete task, please cross it off first")
      }
    }
  })

})
