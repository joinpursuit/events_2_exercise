/*- When the user writes something in the `form`'s text input area and clicks `submit`, the `ul` should update with a new `li` item at the bottom of the list. The page **should not refresh**.
- When the user writes _nothing_ in the `form`'s text input area and clicks `submit`, an error message (inside a `p` tag) should appear below the form.
- When the user clicks on one of the `li` items, the item should be crossed out, indicating that that to-do is complete.
*/

document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector(".form");
    form.addEventListener("submit", event => {
      event.preventDefault()
      let ulList = document.querySelector(".ulList");
      let userInput = document.querySelector(".input1")
      let li = document.createElement("li");
      li.innerText = userInput.value;
      ulList.appendChild(li)

        li.addEventListener("click",event => {
          //event.target
          event.currentTarget.style.textDecoration = "underline";
          //document.querySelector("ulList").style.textDecoration = "underline";

        })
      // debugger;
    })



    let error = document.querySelector(".error");
    error.addEventListener("submit", event => {
      if(event.input1.value === ""){
        error.innerText = "please enter valid text"
      }
    })

  // ulList.addEventListener("click", event => {
  //   debugger;
  //   // let form = document.querySelector(".input1");
  //   // form.value = event.
  // });
});

// const onclick (event) => {
// let form = document.querySelector(".input1");
// form.value = event.
//
//
// })
//
// let body = document.querySelector("body");
// body.addEventListener("click", event => {
//   debugger;
//   let newNode = document.createElement('h1');
//   newNode.innerText= "whoa this is so crazy!!!";
//   event.currentTarget.appendChild(newNode);
// });
// });
//
// let node = document.querySelector('.className');
// console.log('node:', node.parentNode.children);
