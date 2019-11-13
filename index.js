document.addEventListener("DOMContentLoaded", () => {

  let ul = document.querySelector("ul")
 let submit = document.querySelector("#submit")
  submit.addEventListener("click",(e) => {
   e.preventDefault()
   if(document.querySelector("#input").value === "" ){
     document.querySelector("#null").innerText = "Error TODO cannot be empty"
   } else{
   let li = document.createElement("li")
   li.innerText = document.querySelector("#input").value
   ul.appendChild(li)
 }

 })
 document.body.appendChild(ul)

ul.addEventListener("click",(e) => {

   e.target.style.textDecoration = "line-through"
 })
})
