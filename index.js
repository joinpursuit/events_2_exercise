document.addEventListener('DOMContentLoaded', () => {
//script tag is in the head and wil load fast the DOMContentLoaded will slow it down

  // let submit = document.querySelector('form')
  // submit.addEventListener('submit', displayList)

    let todoInput = document.querySelector('#todo')
    let form = document.querySelector("form")
   //  grab the list (ul)
    let list = document.querySelector('ul')

    form.addEventListener("submit", (event) => {
    event.preventDefault();

  //  Create li items
    let liTodo = document.createElement("li")

  // grab user input from inputbox && Add user input to the list item
    liTodo.innerText = todoInput.value

    let errorMessage = document.getElementById("message") //p tag if input is empty

   /* event listener will cross out listItem when clicked - this could slow the page down
   because each item will call it's own event listener
   liTodo.addEventListener("click", () =>{
     liTodo.style.textDecoration = "line-through"
   })*/

    if(todoInput.value.trim() !== ""){ //trim creates an empty string if spaces were inputed
     list.appendChild(liTodo)
     errorMessage.innerText = "" //empty string so that the error message disappears once corrected.
     todoInput.value = "" // return an empty string - input box will be ready for another input.
   }
    else {
     //let errorMessage = document.querySelector("#message")
     errorMessage.innerText = " Error! Input can't be empty"
   }
})
  //addEventListener will grab the ul list and the event target will see where the event(click)
  // happened and put the textDecoration
    list.addEventListener("click", (event) => {
      event.target.style.textDecoration = "line-through"
    })
})

//       function displayList(event) {
//       event.preventDefault()//stops page from refreshing
//       let item = document.getElementById("todo"); // getting the text entered into input
//       let listItem = document.createElement("li"); //creating list
//       listItem.innerText = item.value; // add the item input and put it in the list
//       list.appendChild(listItem); //make listItem a child of list.
//
// }
