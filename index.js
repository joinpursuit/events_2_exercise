document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        let inputs = document.querySelector('textarea').value.split('\n')
        for (let input of inputs) {
            if (input.split(``).every(e => e !== ` `) && input !== ``) {
                let unorderedList = document.querySelector('#entries')
                let newEntry = document.createElement('li')
                let deleteButton = document.createElement('button')
                newEntry.innerText = input
                deleteButton.innerText = `X`
                deleteButton.addEventListener('click', (e) => {unorderedList.removeChild(newEntry)})
                newEntry.appendChild(deleteButton)
                unorderedList.appendChild(newEntry)
                document.querySelector('textarea').value = ``
                document.querySelector('p').innerText = ``
            } else {
                document.querySelector('p').innerText = `Error please enter a valid input`
                document.querySelector('textarea').value = ``
            }
        }
    })
    
    document.querySelector('ul').addEventListener('click', e => {
        e.target.style.textDecoration !== 'line-through' ?
            e.target.style.textDecoration = 'line-through' :
            e.target.style.textDecoration = 'none'
    })









})