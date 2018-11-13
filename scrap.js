let theForm = document.querySelector(".form")
theForm.addEventListener("submit", event => {
  event.preventDefault();

  let textInput = document.querySelector(".input").innerText;
  let newP = document.createElement("p");
  newP.innerText = "Error";
  event.currentTarget.appendChild(newP)
})
