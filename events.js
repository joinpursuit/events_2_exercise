document.addEventListener("DOMContentLoaded", () => {

})


    const toDoList = () =>{
        let userInput = document.querySelector("#list")
        let string = userInput.value
        let ul = document.querySelector("#newList")
        let li = document.createElement("li")
        li.innerText = string
        ul.appendChild(li)
       
    }