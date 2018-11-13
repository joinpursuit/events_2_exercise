let form = document.querySelector(".form")
form.addEventListener("submit", event => {
event.preventDefault();

let textInput = document.querySelector(".input").innerText;
let newP = document.createElement("p");

newP.innerText = "Error";
event.currentTarget.appendChild(newP)
})



//scrap1:-----------------
document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector(".form")
  //
  // form.addEventListener("submit", event => {
  //   event.preventDefault();
  // });




// function error() {

  // let theForm = document.querySelector(".form")
  form.addEventListener("submit", event => {
    event.preventDefault();

    let textInput = document.querySelector(".input").innerText;
    let newP = document.createElement("p");
    newP.innerText = "Error";
    event.currentTarget.appendChild(newP)
  })

// }

  // let textInput = document.querySelector(".input").innerText;
  //
  // if (textInput=== "undefined") {
  //   error()
  // }





  // let textInput = document.querySelector(".input").innerText;
  // console.log("textInput", textInput);
  // let theUl = document.querySelector("ul").innerHTML;
  // console.log("theUl", theUl);
  //
  // textInput.addEventListener("submit", event => {
  //
  //   let newLi = theUl.createElement("li");
  //   console.log("newLi", newLi);
  //   newLi.innerText = textInput;
  //   console.log("", textInput);





//     let makeLi = document.createElement("li");
// console.log(textInput.innerText);


    // makeLi.innerText = textInput.innerText;

    // event.currentTarget.appendChild(makeLi)

//scrap:-----
    // let textInput = querySelector(".input")
    // console.log(textInput);
    // // makeLI.innerText = "dka djaflk;a";
    // // event.target.parentNode.replaceChild
//end of scrap:------
  // })

//





})

//end of scrap1------------
