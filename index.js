document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.createElement("h1")
    h1.innerText = "My To-Dos"
    let ul = document.createElement("ul")
    let form = document.createElement("form")
    document.body.appendChild(h1)
    document.body.appendChild(form)
    document.body.appendChild(ul)
    let input = document.createElement("input")
    input.type = "text"
    form.appendChild(input)
    let submit = document.createElement("input")
    submit.type = "button"
    submit.value = "Submit to my list"
    form.appendChild(submit)
    submit.addEventListener("click", () => {
        let li = document.createElement("li")
        let userInput = input.value;
        li.innerHTML = userInput
        ul.appendChild(li)
    })
})