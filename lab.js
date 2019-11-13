document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        let input = document.querySelector('#input')
        if(!input.value){

            let error = document.createElement('p')
           error.innerText = 'error. To Do cannot be empty'
          

            document.body.appendChild(error)


        }else{
            let inputStr = document.createElement('li')
            inputStr.innerText = input.value
            document.body.appendChild(inputStr)
        }


        event.preventDefault()
               
       
    })


})