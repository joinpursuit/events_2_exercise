document.addEventListener('DOMContentLoaded', () => {
    // console.log("running")
    let newToDoList = document.querySelector("#form");
    // console.log("newToDoList", newToDoList)

    newToDoList.addEventListener('submit', (event) => {
        //anonymous function// console.log("running!!!!")
        event.preventDefault();
        // preventing html page from reloading after pressing submit

        let getInput = document.getElementById("singleText")
        let userInput = getInput.value
        // console.log("user Input", userInput);

        let ulList = document.getElementById("list")
        let newElement = document.createElement("li")
        // newElement.id = "newListItem"
        // let li = document.createElement("li")

        let para = document.querySelector("p")
        if (userInput === '') { // === false is not working // if the singleText 
            para.innerText = "Error.Todo cannot be empty"
            // console.log(para.innerText)

        } else {
            newElement.innerText = userInput
            ulList.appendChild(newElement)
        }
    })
    // if (getInput === false) { // same if( getInput ===
    //     p.innerText = "Error.Todo cannot be empty"
    // } else {
    //     newElement.innerText = userInput
    //     ulList.appendChild(newElement)
    // }

    // below from (event)=> { I have another anonymous function that crosses with a line words
    document.getElementById("list").addEventListener("click", (event) => {
        // console.log("target", event.target)
        // prevent forms from being submitted somewhere else, default action of a form 
        event.target.style.textDecoration = "line-through";
    })
})