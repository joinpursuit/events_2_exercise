document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector("form"); // grabs the form
    form.addEventListener("submit", (e) => { // event listner on the form's submit button
        
        let userInput = document.querySelector("#userInput")
        let input = userInput.value
        let ul = document.querySelector("#ul");
        let li = document.createElement("li");
        li.innerText = input
        let error = document.createElement("p");//Creates a paragraph


        if(input === ""){  // if the input is empty strings 
            error.innerText = 'Error. Todo cannot be empty' 
            form.appendChild(error) //place error to the form
            e.preventDefault();  // Alows the ul to populate with the li and not refresh.
        
        } else {
            ul.appendChild(li); // places the li to the ul which is on the form
            e.preventDefault(); // Alows the ul to populate with the li and not refresh.
        }

        li.addEventListener("click", () => { // listens for when a li is clicked
            li.style.textDecoration = "line-through"; //Places a line through the li that was clicked
            // debugger
    
        })
    })
   
   
})
