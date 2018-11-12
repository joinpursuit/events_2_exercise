document.addEventListener('DOMContentLoaded', () => {
    let addButton = document.getElementById('addButton');
    let ul = document.getElementById('ulTodo');
    let inputText = document.getElementById('todoAddText')
    let form = document.getElementById('form');

    function addToList () {
        let newListItem = document.createElement('li');
        newListItem.innerText = inputText.value;
        ul.appendChild(newListItem);
        form.reset(); 
    }

    function emptyError () {
        let errorP = document.createElement('p')
        errorP.innerText = 'Error, please input text!'
        form.appendChild(errorP)
    }

    function crossoutWord () {
        event.target
    }

    addButton.addEventListener('click', event => {
        event.preventDefault();
        if (inputText.value.length > 0) {
            addToList();
        } else {
           emptyError();
        }
    })

    ul.addEventListener('click', event => {
        let strikedLi = document.createElement('li')
        strikedLi.innerHTML = `<strike>${event.target.innerText}</strike>`
        event.target.parentNode.replaceChild(strikedLi, event.target)
    })
})

