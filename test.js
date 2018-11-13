document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("submit");
  let input = document.getElementById("myInput");
  let form = document.getElementById("todoform");
  let ul = document.getElementById("todolist");
  let myLis = document.getElementsByTagName("LI");
  // let body = document.getElementsByTagName('LI');

  button.addEventListener("click", event => {
    event.preventDefault();
    let newLi = document.createElement("li");
    newLi.innerText = input.value;
    ul.appendChild(newLi);
    input.value = null;
    // form.reset();
    if (input.value.length !== 0) {
      console.log("yas");
    } else {
      let error = document.createElement("p");
      error.innerText = "insert a valid input";
      form.appendChild(error);
    }
  });
  //
  // li.addEventListener("click", (even) => {
  //   event.style.text-decoration: line-through;
  // })
});
