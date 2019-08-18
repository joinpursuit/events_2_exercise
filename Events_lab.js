document.addEventListener('DOMContentLoaded', () => {})


const addNewTask = () => {
    let taskInput = document.getElementById('new_task').value
    let taskItem = document.createElement('li')
    taskItem.innerText = taskInput
    let ul = document.getElementById('listCategory')
    ul.appendChild(taskItem)

        if (taskItem.innerText === null) {
        let errorMessage = document.createElement('p')
        errorMessage.innerText = "Error Please Enter A Task"
        document.body.appendChild("errorMessage")
    } 
}


// //

