const removeButton = () => {
    let button = document.querySelector("#button")
    button.addEventListener("click", () => {
        let body = document.querySelector("body")
        body.removeChild(button)
    })

}