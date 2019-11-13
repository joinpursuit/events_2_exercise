document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.createElement("h1")
    h1.innerText = "My To-Do List"
    document.body.appendChild(h1)
    let ul = document.createElement("ul")
    document.body.appendChild(ul)
    let button = document.querySelector("button")
    let input = document.querySelector("input")
    // const newList = () => {
    //     let h1 = document.createElement("h1")
    //     h1.innerText = "To-do List"
    //     document.body.appendChild(h1)
    // }
    button.addEventListener("click", () => {
        if (!input.value) {
            alert("Please insert a value.")
        } else {         
            let li = document.createElement("li")
            li.innerText = input.value      
            ul.appendChild(li)
            let button = document.createElement("button")
            button.value = "Delete"
            button.innerText = "Delete"
            li.appendChild(button)
            button.addEventListener("click", () => {
                ul.removeChild(li)
            })
        }
        input.value = ""
    })
    ul.addEventListener("click", (e) => {     
        e.target.style.textDecoration = "line-through"    
    })
    ul.addEventListener("dblclick", (e) => {   
        e.target.style.textDecoration = "none"
    })

})