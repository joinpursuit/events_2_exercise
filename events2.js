document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector(".form")
//
    form.addEventListener("submit", event => {
      event.preventDefault();
      //---------------------------
      // if there is no inner text:
      // //--------------------------------
      let input = document.querySelector(".input");
      let textInput = input.innerText;
      let newP = document.createElement("p");

      newP.innerText = "Error";
      event.currentTarget.appendChild(newP)

      //--------------------------------
      //if there is inner text:
      //---------------------------
      // console.log("textInput", textInput);
      // console.log("theUl", theUl);

      let textInput; = document.querySelector(".input").innerText;

      if (!textInput) {
        //
        // form.addEventListener("submit", event => {
        // event.preventDefault();

        let input = document.querySelector(".input");
        let textInput= input.value;
        let ul = document.querySelector("ul");
        let newLi = ul.createElement("li");
        console.log(input);
        console.log(textInput);
        // let innerLi = newLi.innerText;

        newLi.innerText = textInput;
        ul.appendChild(newLi)
        // console.log("newLi", newLi);

        // console.log("", textInput);
        })

      } else {


        //-----------------------------
        // cross out the done "to do":
        //-------------------------------

        // let body = document.querySelector("body");
        // body.addEventListener("click", event => {

        let findLi = document.querySelectorAll("li");
        // console.log("findLi", findLi);


        findLi.forEach(elem => {
          elem.addEventListener("click", event => {

            if (event.target.style.textDecoration !== "line-through"){
              event.target.style.textDecoration = "line-through"
            } else {
              event.target.style.textDecoration = "none"
            }


        })
      })


})

//if text:
query selct the ul that is already made - line 2.

on submit, check innerText:
line 7: if there is text, create li inside the ul.
assign the content of the input text to the li.innerText.

else if no text,:

line 10: create p tag. ptag.innertext = "Error"

.
