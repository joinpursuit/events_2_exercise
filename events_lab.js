document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let list = document.createElement("ul");
    let errorMsg = document.createElement("p");
    
    
    form.addEventListener("submit", (e) => {
        let userInput = document.querySelector("#str").value;
        e.preventDefault();
        if(userInput === ""){
            errorMsg.innerText = "Error: please type a to-do item";
            form.appendChild(errorMsg);
        } else {
            // li
            let li = document.createElement("li");
            li.innerText = userInput;
            list.appendChild(li)
            // delete
            let del = document.createElement("button");
            del.innerText = "DELETE";
            li.appendChild(del)
            // errorMsg
            errorMsg.innerText = "";
        }
        document.querySelector("#str").value = "";
    })
    document.body.appendChild(list);
    
    list.addEventListener("click", (e) => {
        if(e.target.type === "submit"){
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
        if(e.target.style.textDecoration === "line-through"){
            e.target.style.textDecoration = "initial";
        } else {
            e.target.style.textDecoration = "line-through";
        }
    })


})