document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector(".form")
//
    form.addEventListener("submit", event => {
      event.preventDefault();
      //---------------------------
      // if there is no inner text:
      // //--------------------------------
      let textInput = document.querySelector(".input").innerText;
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

        form.addEventListener("submit", event => {
        event.preventDefault();

        let input = document.querySelector(".input");
        let textInput= input.value;
        let ul = document.querySelector("ul");

    // console.log("theUl", theUl);

        let newLi = document.createElement("li");
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
        console.log("findLi", findLi);

        findLi.forEach(elem => {
          findLi.addEventListener("click", event => {
            event.target.style.textDecoration = "line-through"
          })
        })
      }
    })


})
