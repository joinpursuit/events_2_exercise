document.addEventListener('DOMContentLoaded', () => {


  let theButton = document.querySelector("button");
  theButton.addEventListener("click", add2List);

  let toDoList = document.querySelector("#list");

  let theSecondButton = document.getElementById("bigButton");
  theSecondButton.addEventListener("click", add2List2);

  toDoList.addEventListener("click", (event) => {
    if(event.target.style.textDecoration !== "line-through") {
    event.target.style.textDecoration = "line-through"
  } else {
    event.target.style.textDecoration = "none"
  }
  })







})





function add2List(event) {
  event.preventDefault();

  let newItem = document.getElementById("item");
  let userInput = newItem.value;
  let theList = document.querySelector("ul");
  console.log(userInput)

  if(newItem.value === "") {
      let changePara = document.querySelector("p");
      changePara.innerText = "You have to type something in order to add to the list."
  } else {
    let changePara = document.querySelector("p")
    let newEl = document.createElement("li");
    newEl.innerText = userInput;
    theList.appendChild(newEl);
    newItem.value = ""
    changePara.innerText = ""


    let del = document.createElement("button");
    del.innerText = "Delete"
    newEl.appendChild(del)
    del.onclick= (event) => {
      event.preventDefault();
    theList.removeChild(newEl)
    }

    }
  }






  function add2List2(event) {
    event.preventDefault();

    let newItem = document.querySelector("textarea");
    let userInput = newItem.value;
    let theList = document.querySelector("ul");
    console.log(userInput)


    if(newItem.value === "") {
        let changePara = document.querySelector("p");
        changePara.innerText = "You have to type something in order to add to the list."
    } else {
      let arr = userInput.split("\n");
      for (let i of arr) {

      let changePara = document.querySelector("p")
      let newEl = document.createElement("li");
      newEl.innerText = i;
      theList.appendChild(newEl);
      newItem.value = ""
      changePara.innerText = ""


      let del = document.createElement("button");
      del.innerText = "Delete"
      newEl.appendChild(del)
      del.onclick= (event) => {
        event.preventDefault();
      theList.removeChild(newEl)
      }
    }

      }
    }
