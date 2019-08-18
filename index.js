document.addEventListener('DOMContentLoaded', () => {

    let form = document.querySelector("#chaz")

    form.addEventListener("submit", (event) => {
      let userInput = document.querySelector("#text_input").value
      if (userInput === "") {
        event.preventDefault()
        let alert = document.querySelector("#error")
        alert.innerText = "No text has been entered!"
      } else {
        event.preventDefault()
        let newListItem = document.createElement("li")
        newListItem.innerText = userInput
        listyMcListface.appendChild(newListItem)
      }

    })
})
