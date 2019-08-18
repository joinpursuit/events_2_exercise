let button = document.getElementById('button');
let enterTask = doucment.getElementByID('tasks').value
document.addEventListener('DOMContentLoaded',() => {
    document.addEventListener('enter', (event)=> {
        event.preventDefault()
let paragraph1= document.getElementById('paragraph1');
if (enterTask) {
    let taskLi = document.getElementById('whatToDo')
    let newTask=document.createElementById('li')
    newTask.innerText=enterTask
    taskLi.addEventListener('click', (event)=>{
        event.target.style.textDecoration = 'line-through';
    })
    whatToDo.appendChild(newTask)
    paragraph1.innerText =''
    inputTask='' 
} else {
    paragraph1.innerText ='Error. Empty field'
}

    })
})