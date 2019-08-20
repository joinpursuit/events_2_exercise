document.addEventListener('DOMContentLoaded', () => {
    let myForm = document.querySelector('#new_todo');

    console.log(myForm)
    myForm.addEventListener('submit', (event) => {
    event.preventDefault();
       // window.alert('this shows the event')
     let userInput = document.getElementById('new_task').value 
        if (userInput === '') {
            window.alert('ERROR: Enter A Task')

        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let taskItemList = document.querySelectorAll('li');
    
    taskItemList.addEventListener('click', (event) => {
        console.log('todos were clicked')
    })
})

const addNewTask = () => {
    let taskInput = document.getElementById('new_task').value
    let taskItem = document.createElement('li')
    taskItem.innerText = taskInput
    if (taskInput !== '' ) {
        let ul = document.getElementById('listCategory')
        ul.appendChild(taskItem)
    }
}





//why does my addeventListener keep showing up as null.

