document.addEventListener('DOMContentLoaded', () => {
  let body = document.querySelector('body')
  let form = document.querySelector('form')
  let button = document.querySelector("#button")
  let list = document.querySelector("#list")
  // let listItem = document.querySelector('li')
  let userInput = document.querySelector("#input")

   button.addEventListener('click', () => {
     event.preventDefault()
    if ((userInput.value).length <= 0) {
      let para = document.createElement('p')
      para.innerText = "Error! Input cannot be empty"
      body.appendChild(para)
    } else {
      let listItem = document.createElement('li')
      listItem.innerText = userInput.value
      list.appendChild(listItem)
    }
   })

    list.addEventListener('click', (event) => {
      event.preventDefault()
     let target = event.target
     target.style.textDecorationLine = "line-through"
   })

    // list.addEventListener('click', crossOut);
    //
    // function crossOut() {
    //     let listItem = document.querySelector('li')
    //     listItem.style.textDecorationLine = "line-through"
    // }


    //  list.addEventListener('click', () => {
    //   event.preventDefault()
    //   let listItem = document.querySelector('li')
    //   listItem.style.textDecorationLine = "line-through"
    // })

  //    allListItems.style.textDecorationLine = "overline";
  //  let allListItems = document.querySelectorAll('li');
      // allListItems.addEventListener('click', () => {
      //   event.preventDefault()
      //   allListItem.style.textDecorationLine = "overline";
      // })
      //


  //    allListItems.addEventListener("click", () => {
  // //     for (let )
  //     allListItems.style.textDecorationLine = "overline";
  //   })

})

// document.addEventListener("DOMContentLoaded", () => {
//   let para = document.querySelector('p');
//   para.addEventListener("mouseover", displayAlert)
// })

//  function addListItem () {
//    listItem.innerText = userInput
// //    list.appendChild(listItem)
//  }

// let form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log("You have submitted your form")
// })

// let form = document.querySelector('form')
// let list = document.querySelector("#list")
// let listItem = document.createElement('li')
// let userInput = document.querySelector("#input").value
// list.appendChild(listItem)
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     listItem.innerText = userInput
// })
// })
