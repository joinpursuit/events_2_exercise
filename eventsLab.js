document.addEventListener("DOMContentLoaded",()=>{
    let form = document.querySelector("form")
    let toDoItem = document.querySelector("#toDoItem")
    let list=document.querySelector("#listTodo")
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        
        
        if(toDoItem.value){
            let li=document.createElement("li")
            li.innerText = toDoItem.value

            
            let deletebtn = document.createElement("button")
            deletebtn.innerText = "delete"
            li.appendChild(deletebtn)
            list.appendChild(li)
            document.body.appendChild(list)
            // debugger
            error.innerText=""
            toDoItem.value=""
        } else{

            error=document.querySelector("#error")
            error.innerText = "needs value"
            
        }
    })

    list.addEventListener("click", (event) =>{

        event.target.style.textDecoration = "line-through"
    
    })

    list.addEventListener("click",()=>{

        event.target.parentNode.parentNode.removeChild(event.target)
        // event.target.parentNode.removeChild(event.target)

    })



})