document.addEventListener("DOMContentLoaded", () =>{
    let myList= document.querySelector("#myList");
////////////////////////////////////////////////////////////////////
    let submitItem = document.querySelector("#submit_input");
    submitItem.addEventListener("click", (event) => {
        event.preventDefault();

        let inputText = document.querySelector("input").value;
        let input = [inputText];

        addToDoItems(input);
        document.querySelector("input").value = "";
    })

////////////////////////////////////////////////////////////////////
    let submitList = document.querySelector("#submit_textarea");
    submitList.addEventListener("click", (event) => {
        event.preventDefault();

        let inputList = document.querySelector("textarea").value;
        let filteredList;
        if (inputList === "") {
            filteredList = [inputList];
        } else {
            let arrayList = inputList.split("\n");
            filteredList = arrayList.filter(line => line !== "");
        }

        addToDoItems(filteredList);
        document.querySelector("textarea").value = "";
    })

///////////////////////////////////////////////////////////////////
    myList.addEventListener("click", (event) => {
        let clickedItem = event.target;
        let parent = clickedItem.parentNode;
        
        if (parent === myList) {
            if (clickedItem.style.textDecoration === "line-through") {
                clickedItem.style.textDecoration = "initial";
            } else {
                clickedItem.style.textDecoration = "line-through";
            }
        } else {
            if (clickedItem.innerText === "Remove task if DONE" 
                && parent.style.textDecoration === "line-through") {
                    myList.removeChild(parent); 
            } 
            if (clickedItem.innerText === "Delete") {
                myList.removeChild(parent); 
            }
        }
        //-----------------------------------------------------------------
        let deleteIstructionParagraph = document.querySelector("#delete_instructions");
        let listItemExist = myList.querySelector("li");

        if (!listItemExist && deleteIstructionParagraph) {
            document.body.removeChild(deleteIstructionParagraph);
        }
        if (listItemExist && !deleteIstructionParagraph) {
            let deleteInstruction = document.createElement("p");
            deleteInstruction.setAttribute("id", "delete_instructions");
            deleteInstruction.innerText = "Remove task if DONE will delete a task only if it's crossed out"
            document.body.appendChild(deleteInstruction)
        }

    })

    ////////////////////////////////////////////////////////////////////////
    document.addEventListener("mousemove", (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let effectX = Math.floor(x * 255 / innerHeight);
        let effectY = Math.floor(y * 255 / innerWidth);

        document.body.style.background = `rgb(${effectX}, 197, ${effectY})`;
    })

    ////////////////////////////////////////////////////////////////////////
    let textArea = document.querySelector("textArea");
    textArea.addEventListener("mousemove", (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let effectX = Math.floor(x * 255 / textArea.clientHeight);
        let effectY = Math.floor(y * 255 / textArea.clientWidth);

        textArea.setAttribute("style", `background-color: rgb(${effectX}, ${effectY}, 197)`);
    })
})

///////////////////////////////////////////////////////////////////////////////
const addToDoItems = (list) => {
    let errorParagraph = document.querySelector("#error_p");

    if (list[0] === "" && !errorParagraph) {
        let newP = document.createElement("p");
        newP.setAttribute("id", "error_p");
        newP.innerText = "Invalid input, Please try again";
        document.body.appendChild(newP);
    } else if (list[0] !== "") {
 
        for (let task of list) {
            let newListItem = document.createElement("li");
            newListItem.innerText = task + " ";
            myList.appendChild(newListItem);

            let removeTask = document.createElement("button");
            removeTask.innerText = "Remove task if DONE";
            newListItem.appendChild(removeTask);

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            newListItem.appendChild(deleteButton);
        }
    
        if (errorParagraph !== null){
            document.body.removeChild(errorParagraph);
        }
    }
}