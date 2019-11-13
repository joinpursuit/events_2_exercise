const removePara = () => {
    let div = document.querySelector("#removeP")
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild)
    }
}