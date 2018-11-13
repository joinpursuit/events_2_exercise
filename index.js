document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let ul = document.querySelector("ul");
  let body = document.querySelector("body");
  let par = document.createElement("p");

  form.addEventListener("submit", event => {
    event.preventDefault();
    let div = document.createElement("div");
    let liItem = document.createElement("li");
    let button = document.createElement("button");

    // // when item is clicked puts a line through then only if the item  has a line through will it then allow button to remove the item.
    liItem.addEventListener("click", event1 => {
      event1.target.style = "text-decoration: line-through";


    });
    button.addEventListener("click", event2 => {

      if (event2.target.parentNode.children[0].style.textDecoration
=== "line-through") {
        event2.target.parentNode.remove();
      } else {
        alert("Please cross off items before attempting to delete.");
      }
    });


    if (document.querySelector(".textbox").value === "") {
      par.innerText = "Error";
      body.append(par);
    } else {
      liItem.innerText = document.querySelector(".textbox").value;
      button.innerText = "Button";
      div.append(liItem, button);
      ul.append(div);
      form.reset();

      console.log([liItem][0].childNodes);
      let arr = [];
      for (let i = 0; i < liItem.childNodes.length; i++) {
        if (liItem.childNodes[i].data) {
          arr.push(liItem.childNodes[i].data);
        }
      }


      }
    })
});
