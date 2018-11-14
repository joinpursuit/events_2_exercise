document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector(".form");
    let button = document.querySelector("button")


    form.addEventListener("submit", event => {
      event.preventDefault();
      // console.log(event, textInput);
      let input = document.querySelector(".input");
      let textInput = input.value;
      let ul = document.querySelector("ul");

      if (textInput) {
        let newLi = document.createElement("li");
        let newButton = document.createElement("button");
        newLi.innerText = textInput;
        newButton.innerText = "Remove";
        ul.appendChild(newLi);
        ul.appendChild(newButton)


        newLi.addEventListener("click", event => {

          if (event.target.style.textDecoration !== "line-through"){
            event.target.style.textDecoration = "line-through"
          } else {
            event.target.style.textDecoration = "none"
          }
        })

        newButton.addEventListener("click", event => {
          if (newLi.style.textDecoration !== "line-through") {
            alert("First cross out this To-Do.")
          } else
          if (newLi.style.textDecoration === "line-through") {
            newLi.parentNode.removeChild(newLi)
            newButton.parentNode.removeChild(newButton)
          }
        })

      }else {
        let newP = document.createElement("p");
        // console.log(newP);
        newP.innerText = "Error. You didn't add a To-Do.";
        form.appendChild(newP)
      }
    })

});

// //if text:
// query selct the ul that is already made - line 2.
//
// on submit, check innerText:
// line 7: if there is text, create li inside the ul.
// assign the content of the input text to the li.innerText.
//
// else if no text,:
//
// line 10: create p tag. ptag.innertext = "Error"
//
// .
