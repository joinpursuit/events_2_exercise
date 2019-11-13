document.addEventListener("DOMContentLoaded", () => {

    // let button = document.querySelector("#button")
    // button.addEventListener("click", () => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", () => {

        let userInput = document.querySelector("#userInput")
        let input = userInput.value
        let ul = document.querySelector("#ul");
        let li = document.createElement("li");
        li.innerText = input
        ul.appendChild(li);
    })
    // let form = document.querySelector("#form");
    // form.addEventListener("")

})