document.addEventListener("DOMContentLoaded", () => {

//
// //--------------------------------
// // function error() {
    let form = document.querySelector(".form")
//
//     form.addEventListener("submit", event => {
//       event.preventDefault();
//
//       let textInput = document.querySelector(".input").innerText;
//       let newP = document.createElement("p");
//
//       newP.innerText = "Error";
//       event.currentTarget.appendChild(newP)
//     })

// }
//--------------------------------



//---------------------
// if statement there is something in input : ----------------------
  // let textInput = document.querySelector(".input").innerText;
  //
  // if (textInput=== "undefined") {
  //   error()
  // }

//-----------------------------




//---------------------------
  // console.log("textInput", textInput);
  // console.log("theUl", theUl);

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
// })

//----------------------------










//scrap:-----
    // let textInput = querySelector(".input")
    // console.log(textInput);
    // // makeLI.innerText = "dka djaflk;a";
    // // event.target.parentNode.replaceChild
//end of scrap:------


//





})
