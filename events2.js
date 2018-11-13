document.addEventListener("DOMContentLoaded", () => {

  let textInput = document.querySelector(".input");
  let theUl = document.querySelector("ul");

  textInput.addEventListener("submit", event => {

    let makeLi = document.createElement("li");
console.log(textInput.innerText);
    // makeLi.innerText = textInput.innerText;

    // event.currentTarget.appendChild(makeLi)

//scrap:-----
    // let textInput = querySelector(".input")
    // console.log(textInput);
    // // makeLI.innerText = "dka djaflk;a";
    // // event.target.parentNode.replaceChild
//end of scrap:------
  })

//
  let form = document.querySelector(".form")
  form.addEventListener("submit", event => {
    event.preventDefault();


  })




})
