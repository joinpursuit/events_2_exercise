document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    form.addEventListener("submit", updateList)
    
})

const updateList = (event) => {
    event.preventDefault()
    let listInput = document.getElementById("todoinput");
    let userListElement = listInput.value
    if (listInput.value === '') {
        let errorElement = document.getElementById("error")
        errorElement.innerText = "Error, input cannot be empty"
        return
    } else {
    let list = document.getElementById("todolist")
    let listItem = document.createElement("li") 
    listItem.innerText = userListElement
    list.appendChild(listItem)
    listInput.value = ""
    }
}