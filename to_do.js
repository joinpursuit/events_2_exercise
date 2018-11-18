document.addEventListener("DOMContentLoaded",()=>{
  let list = document.querySelector(".list")
  let form = document.querySelector(".form")
  let enterItem = document.querySelector(".enterItem")
  let btn = document.querySelector(".btn")
  let error = document.querySelector(".error")

  btn.addEventListener("click", () => {
    let newItem = document.createElement('li')
    newItem.innerText = enterItem.value;
    list.appendChild(newItem);
    // form.reset();
    if(enterItem.value === true){

    }
    else if(enterItem.value === ""){
      let alertError = error.innerText = "Alert: Please Add Something to Your To-Do List";

      form.appendChild(error)

    }
    form.reset()


  })
})
