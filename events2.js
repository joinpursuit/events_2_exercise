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
        newLi.innerText = textInput;
        ul.appendChild(newLi)


        newLi.addEventListener("click", event => {

          if (event.target.style.textDecoration !== "line-through"){
            event.target.style.textDecoration = "line-through"
          } else {
            event.target.style.textDecoration = "none"
          }
        })

      }else {
        let newP = document.createElement("p");
        // console.log(newP);
        newP.innerText = "Error";
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
