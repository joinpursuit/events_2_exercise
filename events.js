document.addEventListener("DOMContentLoaded", () => {
    let userInput = {
        list: ""   
    }
    let form = document.querySelector("form")
    form.addEventListener("change", (e) =>{
        userInput[e.target.id] = e.target.value
        console.log(userInput)
    })
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        let li = document.createElement("li")
        li.innerText = userInput["list"]
        document.body.appendChild(li)
        document.getElementById("list").value="";
    })
    let p = document.querySelector("p")
    p.addEventListener("click", (e) => {
        e.preventDefault()
        if(userInput["list"] === ""){
            e.id.innerText = "please put something in the text box"
        }
    })

})
