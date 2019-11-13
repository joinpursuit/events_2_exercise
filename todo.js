document.addEventListener("DOMContentLoaded", () => {
    let ul = document.createElement("ul")
    let form = document.querySelector("form")
    document.body.appendChild(ul)
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        let li = document.createElement("li")
        let input = document.querySelector("#input")
        console.log(input.value)
        
        let paragraph = document.querySelector("p")
        if(input.value.length === 0){
            paragraph.innerText = "error"
        } else{ 
            li.innerText =  input.value
            ul.appendChild(li)

        }
        .addEventListener("click", (e)=>{
        

        })

        
          })

        })






    


// console.log("he")