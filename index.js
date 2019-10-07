document.addEventListener('DOMContentLoaded',() =>{
  let inputBox = document.querySelector('#inputBox'); //
  let toDoList = document.querySelector('#toDoList'); // grabbing the ul because you will be re-using separately.

  let form = document.querySelector('form');
  // console.log(form)
  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    //create li item
      let listItem = document.createElement('li');
    // grab user input from inputBox
      let inputValue = inputBox.value.trim();
      listItem.innerText = inputValue;

    // can slow the page down if we have a lot of tasks
      // listItem.addEventListener('click', () =>{
      //   listItem.style.textDecoration = 'line-through';
      // })


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

    toDoList.addEventListener('click', ()=>{
      event.target.style.textDecoration = 'line-through';
      console.log('the list was clicked.')
      console.log(event.target)
    })
})
