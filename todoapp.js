document.addEventListener("DOMContentLoaded", () => {
  let sub = document.querySelector("#submit");
  let list = document.getElementById("list");

  let input = document.getElementById("things");

  sub.addEventListener("click", event => {
    let create_li = document.createElement("li");
    if (input.value === "") {
      // let create_par = document.createElement("p");
      error.innerHTML = "<p>Input somethin'</p>";
    } else {
      create_li.innerText = input.value;
      event.target.parentNode.appendChild(create_li, event.target);

      error.innerHTML = "<p></p>";
    }
  });
});
