// document listener waits for all data to load
document.addEventListener("DOMContentLoaded" ,()=>{

  let submit = document.querySelector(".submit")
  //declare the submit button
  let toDo = document.querySelector(".todo")
  //declare the toDo list so we can interact with it
  let thing = document.querySelector(".thing")
  //declare the items that will be li's for the toDo list
  let body = document.querySelector("body")
  //declare the body
  let pTag = document.querySelector("p")

  submit.addEventListener("click",()=>{
  //when the submit button is clicked we want to run our function
    let newThing =document.createElement("li");
    function addThing(){
      //our function will evaluate the input from the items section
      newThing.innerText = thing.value;
      toDo.appendChild(newThing)
    }

    let warningP =document.createElement("p");
    function warning(){
      warningP.innerText = "You didn't insert an item. Please insert a new item";
      body.append(warningP)
    }
    if(thing.value.length>0){addThing()}
    else{warning()}
    })

    toDo.addEventListener("click",()=>{

      event.target.innerHTML= "<strike>" + event.target.innerText + "</strike>"
    })
  })
