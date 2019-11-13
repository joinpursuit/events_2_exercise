document.addEventListener("DOMContentLoaded",()=>{
    let form = document.querySelector("form")
    let toDoItem = document.querySelector("#toDoItem")
    let list=document.querySelector("#listTodo")
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let li=document.createElement("li")
        li.innerText = toDoItem.value
        
        if(toDoItem.value){
            list.appendChild(li)
            document.body.appendChild(list)
            debugger
            error.innerText=""
            toDoItem.value=""
        } else{

            error=document.querySelector("#error")
            error.innerText = "needs value"
            
        }
    })
})