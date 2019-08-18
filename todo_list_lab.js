document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#form_id')
    form.addEventListener('submit', newList)
})

function newList(event) {
    /* This section prevents the form from performing its default action of trying
    to submit somewhere. While also assigning the new variables the elements and
    creating the new lis items
     */
    event.preventDefault()
    let unOderList = document.querySelector('ul')
    let no_input = document.querySelector('p')
    let input = document.querySelector('input').value
    let newListItem = document.createElement('li')

    if (input === '') {
        console.log(input);
        no_input.innerText = `Error. Todo cannot be empty`
    } else {
        // assigning the user input into the list item to be printed to the screen
        // then adding an event listener to the individual items which clicked, items crossed through
        no_input.innerText = '';

        newListItem.innerText += `${input} `
        unOderList.appendChild(newListItem).addEventListener('click', (event) => {
            let target = event.target
            if (target.style.textDecoration !== "line-through") {
                target.style.textDecoration = "line-through"
            } else {
                target.style.textDecoration = "none";
            }
        })

        /*Creating a new button element that is appended to the individual list items
        an event listener is added to the delete button, when clicked individual item is deleted from the 
        entire list
        */
        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'delete'
        newListItem.appendChild(deleteButton)
        deleteButton.addEventListener('click', (event) => {
            unOderList.removeChild(newListItem)

        })
    }

    document.querySelector('input').value = ''
}

//don't need to be done
// const clickItem = () => {
//     let allItem = document.querySelectorAll('li')
//     console.log(allItem);
//     for (let i = 0; i < allItem.length; i++) {
//         allItem[i].addEventListener('click', (event) => {
//             allItem[i].style.textDecoration = "line-through";
//         })
//     }

// }