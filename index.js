document.addEventListener('DOMContentLoaded', () => {
    let strInputElement = document.querySelector("#text_input")
    let userSubmitStr = strInputElement.value
    let newListItem = document.createElement("li")
    let form = document.querySelector("#chaz")
    console.log(strInputElement)
    form.addEventListener("submit", (event) => {
      newListItem.innerText = userSubmitStr
      listyMcListface.appendChild(newListItem)
      event.preventDefault()
      console.log(userSubmitStr)
    })
})
