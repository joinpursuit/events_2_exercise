document.addEventListener("DOMContentLoaded", () => {


    let form = document.querySelector("form")//no # needed because there's only 1 form & no id
    let ul = document.getElementById("ulToDo")//no # b/c using getElbyId so it knows it's the tag
    let input = document.querySelector("#newToDo")//needs # becise we're using tag name w/querySelector

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let pTag = document.createElement("p");
        let errorMessage = document.querySelector("p");
        if(input.value === "") {
            if(!errorMessage) { // Check if there is an error message
                pTag.innerText = "ERROR!!! \n Please Enter a To-Do"
                document.body.appendChild(pTag);
            }
        } else {
            if(errorMessage) {
                //to remove the error message once a to do has been added
                document.body.removeChild(errorMessage);
            }
            let li = document.createElement("li")
            li.innerText = input.value
            ul.appendChild(li)
        }
    })

    
})