// Joseph P. Pasaoa
//

const print = (logThis) => {
  console.log(logThis);
}



document.addEventListener('DOMContentLoaded', () => {

    // Add New List Item System
    const addItem = (value) => {
      let makingLI = document.createElement('li');
      let makingItem = document.createElement('span');
      makingItem.innerText = value;
      makingItem.addEventListener('click', (event) => {
          event.target.style.textDecoration !== "line-through"
            ? event.target.style.textDecoration = "line-through"
            : event.target.style.textDecoration = "none";
      } );
      let makingPad = document.createElement('span');
      makingPad.innerText = " ";
      let makingDel = document.createElement('button');
      makingDel.setAttribute('type', 'button');
      makingDel.innerText = "Del";
      makingDel.setAttribute('hidden', true);
      makingDel.addEventListener('click', (e) => {
          e.target.parentNode.remove();
      } );
      makingLI.appendChild(makingItem);
      makingLI.appendChild(makingPad);
      makingLI.appendChild(makingDel);
      makingLI.setAttribute('style', 'height: 20px;');
      makingLI.addEventListener('mouseover', (e) => {
          makingDel.hidden = false;
      } );
      makingLI.addEventListener('mouseout', (e) => {
          makingDel.hidden = true;
      } );
      
      let listWhere = document.querySelector('#listUL');
      listWhere.appendChild(makingLI);
    };
    // Too long input error message creator
    const countChars = () => {
      document.querySelector('#error').innerHTML = `<strong>Error:</strong> Your input is too long. 50 chars max. 
        (${newitem.value.length})`;
    };
    // Resets input textarea on triggers
    const resetInput = () => {
      document.querySelector('#newitem').value = '';
      document.querySelector('#newitem').focus();
      document.querySelector('#newitem').select();
    };

    // Submit Process
    const processSubmit = (e) => {
      e.preventDefault();
      document.querySelector('#error').innerHTML = "&nbsp;";

      let entry = newitem.value;
      let entryArrayed = entry
        .replace('\r', '\n')
        .split('\n');

      if (!entry || !entryArrayed.join('')) { // checks against empty inputs
        document.querySelector('#error').innerHTML = "<strong>Error:</strong> Empty input. Try again.";
        resetInput();
      } else if (entry.split('').length > 50) { // checks against lengthy inputs
        countChars();
        document.querySelector('#newitem').addEventListener('input', countChars);
      } else {
        document.querySelector('#newitem').removeEventListener('input', countChars);
        for (let entry of entryArrayed) {
          if (entry !== "") {
            addItem(entry);
          }
        }
        resetInput();
      }
    }

    // Persistent focus on input textarea
    document.addEventListener('click', () => {
        document.querySelector('#newitem').focus();
        document.querySelector('#newitem').select();
    } );

    // Submit Triggers
    document.querySelector('#addform').addEventListener('submit', (e) => {
        processSubmit(e);
    } );
    document.querySelector('#addform').addEventListener('keydown', (e) => {
        if (e.keyCode === 13 && e.shiftKey) {
          processSubmit(e);
        }
    } );

    // Clear Completed Button Handler
    document.querySelector('#clearthedone').addEventListener('click', (e) => {
        let listedItems = document.querySelectorAll('span');
        for (let item of listedItems) {
          if (item.style.textDecoration === "line-through") {
            item.parentNode.remove();
          }
        }
        document.querySelector('#error').innerHTML = "Completed tasks cleared.";
        resetInput();
    } );
} );
