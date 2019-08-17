document.addEventListener('DOMContentLoaded', () => {
    let form1 = document.querySelector('#form1')
    form1.addEventListener('submit', (event) => {
        event.preventDefault()
        let myList = document.querySelector('#my_Unordered_list');
        let newItem = document.querySelector('#new_item');
        let newItems = document.querySelector('#new_items');
        let myItem = document.createElement('li');
        let myItems = document.createElement('li');
        let deleteButton = document.createElement('button')
        let errorCatch = document.querySelector('#error_message')

        if (newItem.value === '') {
            errorCatch.innerText = 'Error. Todo cannot be empty.'
        } else {    
        errorCatch.innerText = ''
        myItem.innerText = newItem.value
        myItems.innerText = newItems.value

                
        myList.appendChild(myItem)
        myItem.appendChild(deleteButton);
        deleteButton.innerHTML = 'Delete'
        deleteButton.id = 'delBtn'
        deleteButton.onclick = function () {
            deleteButton.parentNode.removeChild(deleteButton)
            myItem.parentNode.removeChild(myItem)
   
        }

        newItem.value = ''

        }
    })

    let formButton2 = document.querySelector('#form2')
    form2.addEventListener('submit', (event) => {
        event.preventDefault()
        let newItem = document.querySelector('#new_item');
        let newItems = document.querySelector('#new_items');
        let myItem = document.createElement('li');
        let errorCatch = document.querySelector('#error_message')

        if (newItems.value === '') {
            errorCatch.innerText = 'Error. Todo cannot be empty.'
        } else {    
        errorCatch.innerText = ''
        // myItems.innerText = newItems.value
        let myArray = newItems.value.split('\n')
console.log(myArray)
        
        for (let i of myArray) {
            let myList = document.querySelector('#my_Unordered_list');
            let myItems = document.createElement('li');
            let deleteButton = document.createElement('button')

            myList.appendChild(i)
            myItems.appendChild(deleteButton);

            deleteButton.innerHTML = 'Delete'
            deleteButton.id = 'delBtn'
            deleteButton.onclick = function () {
                deleteButton.parentNode.removeChild(deleteButton)
                myItems.parentNode.removeChild(i)
                }
        }
        // myList.appendChild(myItems)
        // myItems.appendChild(deleteButton);
        // deleteButton.innerHTML = 'Delete'
        // deleteButton.id = 'delBtn'
        // deleteButton.onclick = function () {
        //     deleteButton.parentNode.removeChild(deleteButton)
        //     myItems.parentNode.removeChild(myItems)
   
        //     }
        newItems.value = ''
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let todoList = document.querySelector('#my_Unordered_list');

    todoList.addEventListener('click', (event) => {
        if (event.target.id !== 'delBtn') {
            if(event.target.style.textDecoration !== "line-through") {
                event.target.style.textDecoration = "line-through";
                console.log(`${event.target.innerText} was clicked`);
            } else {
                event.target.style.textDecoration = "";
                console.log(`${event.target.innerText} was clicked`);
            }

        }

    })

})
