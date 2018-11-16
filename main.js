document.addEventListener("DOMContentLoaded", () => {

  // let ol = document.querySelector(".saved");
  let newNote = document.querySelector(".newNote");
  let noteSaved = document.createElement('ul');
  let addButton = document.querySelector("#add"); //button
  // let form = document.querySelector('.form')
      // let note = { //I didn't use this obj...
      //   zoneStorage: document.querySelector(".saved"),
      //   time: new Date().toLocaleTimeString(),
      // };
  // const addTodo = () => {}
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    addButton.style.background = "lightgreen";

    if(newNote.value === ''){
      let alert = document.createElement('p');
      alert.innerText = "Upss is Empty"; // Or I could use [createTextNode].
      event.target.parentNode.insertBefore(alert, noteSaved.innerHtml);
    }else{
          let li = document.createElement("li");
         event.target.parentNode.appendChild(li);

          // event.target.parentNode.insertBefore(li, saved.innerHtml);
          li.textContent = newNote.value; // textContent is doing the same like innerText
    };
  });
});
