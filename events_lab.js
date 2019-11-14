document.addEventListener("DOMContentLoaded", () => {


    let form = document.querySelector("form")//no # needed because there's only 1 form & no id
    let ul = document.getElementById("ulToDo")//no # b/c using getElbyId so it knows it's the tag
    let input = document.querySelector("#newToDo")//needs # becise we're using tag name w/querySelector

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let paragraph = document.createElement("p");
        let emptyError = document.querySelector("p");

        if(input.value === "") {
            errorMessageDisplay(emptyError, paragraph);
        } else {
            removeErrorMessage(emptyError);
            
            let li = document.createElement("li")
            li.innerText = input.value

            let remove = document.createElement("button");
            setRemoveProperties(remove, li);

            li.appendChild(remove);
            ul.appendChild(li);
        }

        input.value = "";
    })




    ul.addEventListener("click", (e) => {
        let target = e.target;

        if(target.nodeName !== "BUTTON") {
            if(target.style.textDecoration === "line-through") {
                target.style.textDecoration = "none";
            } else {
                target.style.textDecoration = "line-through";
            }
        }

        if(target.nodeName === "BUTTON") {
            deleteToDo(target);
        }
    })
})

errorMessageDisplay = (error, el) => {
    if(!error) {
        el.innerText = "ERROR!!! \n Please Enter a To-Do";
        document.body.appendChild(el); 
    }
}

removeErrorMessage = (error) => {
    if(error) {
        document.body.removeChild(error);
    }
}

setRemoveProperties = (remove, li) => {
    remove.id = li.innerText;
    remove.innerText = "Delete To-Do";
    remove.style.marginLeft = "10px";
}

deleteToDo = (button) => {
    let ul = document.querySelector("ul");
    ul.removeChild(button.target.parentNode);
}