document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.createElement("h1")
    h1.innerText = "My To-Do List"
    document.body.appendChild(h1)
    let ul = document.createElement("ul")
    document.body.appendChild(ul)
    let button = document.querySelector("button")
    let input = document.querySelector("input")
    let li = document.createElement("li")
    button.addEventListener("click", () => {
        if (!input.value) {
            alert("There must be a value here")
        } else {
            li.innerText = input.value      
            ul.appendChild(li)
        }
        input.value = ""
    })
    ul.addEventListener("click", () => {
        li.style.textDecoration = "line-through"    
    })
    ul.addEventListener("dblclick", () => {
        li.style.textDecoration = "none"
    })

})