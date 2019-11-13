document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        
        let userInput = document.querySelector("#userInput")
        let input = userInput.value
        let ul = document.querySelector("#ul");
        let li = document.createElement("li");
        li.innerText = input
        let error = document.createElement("p");//Creates a paragraph


        if(input === ""){
            error.innerText = 'Error. Todo cannot be empty' 
            form.appendChild(error)
            e.preventDefault();  // Alows the ul to populate with the li and not refresh.
        
        } else {
            ul.appendChild(li);
            e.preventDefault(); // Alows the ul to populate with the li and not refresh.
        }
    })
   
})
