document.addEventListener("DOMContentLoaded", () => {
    

let form = document.querySelector("#form")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    
})
let ul = document.querySelector("#ul")
let input = document.querySelector("#input")
let submit = document.querySelector("#submit")

submit.addEventListener("click",()=>{
   
    let newli = document.createElement("li")
   
   
    newli.innerText = input.value



   ul.appendChild(newli)
    
})













})
