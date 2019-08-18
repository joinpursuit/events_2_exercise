// Creating all the required tags
const root = document.querySelector('#root');
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const form = document.createElement('form');
const label = document.createElement('label');
const inputText = document.createElement('textarea');
const inputButton = document.createElement('input');
// Creating the error node that gets appended only if there is no text input
const error = document.createElement('p');
const errorMsg = document.createTextNode('You cannot add a empty to-do!');
error.appendChild(errorMsg);
// List of all existing li elements
const li = document.querySelectorAll('li'); 
// Function runs only once the DOM has been loaded
function layout() {
    h1.innerHTML = 'My To-Do\'s';
    form.setAttribute('action', '#');
    // form.setAttribute();
    label.innerHTML = 'To-Do: ';
    inputText.setAttribute('placeholder', 'What\'s next...');
    inputText.setAttribute('autofocus', 'true');
    inputButton.setAttribute('type', 'submit');
    inputButton.setAttribute('value', 'ADD');
    // Appending the form elements in order of display
    form.appendChild(label);
    form.appendChild(inputText);
    form.appendChild(inputButton);
    root.appendChild(h1);
    root.appendChild(form);
    root.appendChild(ul);
}
// Helper function that creates a new li element with the input text that gets appened to the ul
function addToList() {
    const text = inputText.value.trim().split('\n');
    text.forEach(ele => {
        const li = document.createElement('li');
        const inputValue = document.createTextNode(ele);
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.innerText = 'Delete';
    
        li.appendChild(inputValue);
        deleteBtn.addEventListener('click', deleteItem);
        li.addEventListener('click', crossOutElement);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    })
}
// Prevents the form's default behavior which is to refresh the web page on submit
function preventInputRefresh(e) {
    e.preventDefault();
    if (inputText.value.length > 0) {
        if (root.contains(error)) { // Check if error msg exists on the DOM
            error.parentNode.removeChild(error);
        }
        // while (text.length) {
        //     let item = text.shift();
            addToList();
        // }
    } else {
        emptyErrorInput(); // Adds the error node if the user submits a empty input
    }
    inputText.value = ''; // Clears the input text box after every submit
}

function emptyErrorInput() {
    ul.parentNode.insertBefore(error, ul); // Adds the error msg to the DOM
}

function deleteItem() {
    this.parentNode.remove(li);
}

function crossOutElement() {
    if (this.style.textDecoration === 'none') {
        this.style.textDecoration = 'line-through';
    } else {
        this.style.textDecoration = 'none';
    }
}

document.addEventListener('DOMContentLoaded', layout);
// form.addEventListener('submit', preventInputRefresh);
inputButton.addEventListener('click', preventInputRefresh);