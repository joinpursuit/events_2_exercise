document.addEventListener('DOMContentLoaded',() =>{
    let form = document.querySelector('#form')
     form.addEventListener('submit',(event)=> {
         event.preventDefault()
         let grabInput = document.querySelector('#todotext')
         console.log(grabInput.value)
         let makeErrorMessage = document.querySelector('#para')

         if (grabInput.value === ''){
            makeErrorMessage.innerText = "Error: Todo cannot be empty"
            
            
         } else {
            let makeTodo = document.createElement('li')
             let grabList = document.querySelector('#todolist')
            makeTodo.innerText = grabInput.value
             grabList.appendChild(makeTodo)
         }        
     })
    })
     


    