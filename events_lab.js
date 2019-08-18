
document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {


    event.preventDefault()
      console.log("complete")
  })
})





document.addEventListener('DOMContentLoaded', () => {

let ul = document.createElement('ul')
document.body.appendChild(ul)
  ul.addEventListener('click', submit => {
      })
  })




  function submit(){
    // let ul = document.createElement('ul')
    // document.body.appendChild(ul)
    let textElement = document.getElementById("text_input")
    let newText = document.createElement("li")
     newText.innerText = textElement.value
       document.body.appendChild(newText)

     }
