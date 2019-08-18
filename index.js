document.addEventListener('DOMContentLoaded',() =>{
  let inputBox = document.querySelector('#inputBox'); //
  let toDoList = document.querySelector('#toDoList'); // grabbing the ul because you only need it once.

  let form = document.querySelector('form');
  // console.log(form)
  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    //create li item
      let listItem = document.createElement('li');
    // grab user input from inputBox
      let inputValue = inputBox.value.trim();
      listItem.innerText = inputValue;

      let p = document.querySelector('#error') // have to create the variable
      if(inputValue !== ""){
        // adding item to the lists
        toDoList.appendChild(listItem);
        p.innerText = ""; // doesnt leave a message b/c the input has some kind of value
        inputBox.value = '';
      }else{
        p.innerText = "Error! Input cannot be empty."; // leaves an error message
      }
  })
})
