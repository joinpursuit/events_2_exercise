document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let li = document.createElement("li");
    let task = document.querySelector("#task");
    let ul = document.querySelector("#list");
    let newTask = task.value;
    let p = document.createElement("p");
    if (newTask === "") {
      p.innerText = "Error no input";
      document.body.appendChild(p);
    } else {
      li.innerText = newTask;
      ul.appendChild(li);
    }
    ul.addEventListener("click", e => {
      let strike = document.createElement("strike");
      strike.innerText = e.target;
      ul.appendChild(strike);
    });
  });
});
