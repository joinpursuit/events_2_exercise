document.addEventListener('DOMContentLoaded', () => {

    let myForm = document.querySelector('#form');
    console.log(myForm)
    myForm.addEventListener('submit', (event) => {
    event.preventDefault();
        window.alert('this shows the event')
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
    let ul = document.getElementById('listCategory')
    let form = document.getElementById("new_todo")
    ul.appendChild(taskItem)
}


//why does my addeventListener keep showing up as null.

