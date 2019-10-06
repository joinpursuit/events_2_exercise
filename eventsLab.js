document.addEventListener("DOMContentLoaded", () => {
  let toDoInput = document.querySelector("#toDoItem");
  let toDoContainer = document.querySelector("ul");
  let inputForm = document.querySelector("form")

// function submitAction() {
//   let submit = document.querySelector("#submitToDo");
//   submit.addEventListener("click", () => {
//     let newItem = document.createElement("li");
//     document.getElementById("ul").appendChild(newItem);
//     newItem.innerText = toDoItem.value;
//     event.preventDefault();
//   })
// }

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let liToDo = document.createElement("li");
  liToDo.innerText = toDoInput.value;

  if (toDoInput.value.trim() !== "") {
    toDoContainer.appendChild(liToDo);
    toDoInput.value = "";
  } else {
    window.alert("error");
  }
  console.log("test submission");
})

toDoContainer.addEventListener("click", (event) => {
  console.log("test");
})

})
