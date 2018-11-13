document.addEventListener("DOMContentLoaded", () => {
   let txtInput = document.querySelector(".input");
   let theUl = document.querySelector("ul");

   txtInput.addEventListener("submit", event => {
     let makeLi = document.createElement("li");
console.log(txtInput.innerText);
    makeLi.innerText = txtInput.innerText;
     event.currentTarget.appendChild(makeLi)
  })

  let form = document.querySelector(".form")
  form.addEventListener("submit", event => {
    event.preventDefault();
   })
 })
