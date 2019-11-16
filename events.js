document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let list = document.querySelector("ul");
    let userInput = document.querySelector("#toDo");


    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let p = document.createElement("p")
        let error = document.querySelector("p")
        if(userInput.value === ""){
            if(!error){
                p.innerText = "Buddy please input something into the to-do list"
                document.body.appendChild(p)
            }
        }else{
            if(error){
                document.body.removeChild(error)
            }
            let li = document.createElement("li");
            li.innerText = userInput.value
            list.appendChild(li)
        }
        
        userInput.value = "";
    })

    list.addEventListener("click", (e) =>{
        let target = e.target;
        target.style.textDecoration = "line-through";
    })

    list.addEventListener("mouseover", (e) =>{
        let target = e.target;
        target.style.textDecoration = "none";
    })
})
