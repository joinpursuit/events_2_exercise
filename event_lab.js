document.addEventListener("DOMContentLoaded", () =>{





    let form = document.querySelector("form")
    form.addEventListener("submit", (e) => { //to prevent refresh refresh
        let input = document.querySelector("#item")
        let ul = document.querySelector("#ul")
        let li = document.createElement("li");
        
        li.innerText = input.value
        
        e.preventDefault()
        let error = document.createElement("P");
        if(input.value === "") {
            error.innerText = "to do can not be empty"
            form.appendChild(error)
            e.stopPropagation()
        } else {
            ul.appendChild(li)
            document.body.appendChild(ul)
        }
        ul.addEventListener('click',(e) => {
            debugger
             //[e.target.value].style.textDecoration
            // li.style.textDecoration
        })
        
        
    })

})
