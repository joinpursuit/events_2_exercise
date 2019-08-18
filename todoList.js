document.addEventListener('DOMContentLoaded',() =>{
    let form = document.querySelector('#form')
    let grabInput = document.querySelector('#todotext')
    let grabList = document.querySelector('#todolist')

     form.addEventListener('submit',(event)=> {
         event.preventDefault()     
         console.log(grabInput.value)
         let makeErrorMessage = document.querySelector('#para')
         let makeTodo = document.createElement('li')
        
         if (grabInput.value === ''){
            makeErrorMessage.innerText = "Error: Todo cannot be empty"
               
         } else { 
            makeTodo.innerText = grabInput.value
             grabList.appendChild(makeTodo)
             makeErrorMessage.innerText = ''
             grabInput.value = ''
         }     
        
        grabList.addEventListener('click', (event)=>{
            let li = event.target
            li.style.textDecoration = 'line-through'
        })      
     })    
           
    })
     


   