document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("submit");
  let input = document.getElementById("myInput");
  let form = document.getElementById("todoform");
  let ul = document.getElementById("todolist");
  let myLis = document.getElementsByTagName("LI");
  // let body = document.getElementsByTagName('LI');

  button.addEventListener("click", event => {
    event.preventDefault();

    // form.reset();
    if (input.value.length === 0) {
      let error = document.createElement("p");
      error.innerText = "insert a valid input";
      form.appendChild(error);
    } else {
      let newLi = document.createElement("li");
      newLi.innerText = input.value;
      ul.appendChild(newLi);
      input.value = null;
    }
  });

  ul.addEventListener("click", event1 => {
    if (event1.target.tagName === "LI") {
      event1.target.style.textDecoration = "line-through";
    }
  });
});
