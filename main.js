document.addEventListener("DOMContentLoaded", () => {

  let newNote = document.querySelector(".newNote");
  let noteSaved = document.createElement('ul');
  let addButton = document.querySelector("#add"); //button
  let form = document.querySelector('.form')
  let note = {
    zoneStorage: document.querySelector(".saved"),
    time: new Date().toLocaleTimeString(),
  };

  // const addTodo = () => {}

  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    addButton.style.background = "lightgreen";
    // newNote.innerHtml = ${}
    // debugger
    // appendChild(noteSaved);
    if(newNote.value === ''){
      let alert = document.createElement('p');
      alert.innerText = "Upss is Empty"; // Or I could use [createTextNode].
      event.target.parentNode.insertBefore(alert, noteSaved.innerHtml);
    }else{
      let storage = [];
      let storaged = document.zoneStorage.appendChild("noteSaved");
        for (let i = 0; i < storage.length; i++) {
          noteSaved.innerHtml += `<li${storage[i]}>`;
        };
      // event.target.noteSaved = `${newNote}`;
      // noteSaved.innerHtml =
      // insertBefore(newNote, noteSaved);
      newNote.innerHtml += `<li> ${noteSaved} </li>`
      style="width: 400px"

    };
  });
    // if(!newNote.hasChildNodes()){
    //
    // }
    // const completeTodo = ()=> {}
  });
