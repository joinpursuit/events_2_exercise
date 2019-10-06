document.addEventListener("DOMContentLoaded", () => {
  let toDoInput = document.querySelector("#toDoItem");
  let toDoContainer = document.querySelector("ul");
  let inputForm = document.querySelector("form")

  inputForm.addEventListener("submit", (event) => {
  event.preventDefault(); //so we can keep adding items w/o refresh

  let liToDo = document.createElement("li");
  liToDo.innerText = toDoInput.value;

  if (toDoInput.value.trim() !== "") {
    toDoContainer.appendChild(liToDo);
    toDoInput.value = "";
  } else {
    let noInput = document.getElementById("noInputWarning");
    noInput.innerText = "You didn't enter a task!";
  }
  console.log("test submission");
})

toDoContainer.addEventListener("click", (event) => {
  console.log("test");
})

})
