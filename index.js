//This function adds a string input to an unordered list
const add = (input) => {
    let unorderedList = document.querySelector('#entries')
    let newEntry = document.createElement('li')
    let deleteButton = document.createElement('button')
    newEntry.innerText = input
    deleteButton.innerText = `X`
    deleteButton.addEventListener('click', () => {unorderedList.removeChild(newEntry)})
    newEntry.appendChild(deleteButton)
    unorderedList.appendChild(newEntry)
    document.querySelector('textarea').value = ``
    document.querySelector('p').innerText = ``
}

const processInputs = (input) => {
    if (!(input.split(``).every(e => e === ` `)) && input !== ``) {
        add(input) 
    } else if (!(input.split(``).every(e => e === ` `)) || input === ``) {
        document.querySelector('p').innerText = `Error please enter a valid input`
        document.querySelector('textarea').value = ``
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const inputs = document.querySelector('textarea').value.split('\n')
        inputs.forEach(processInputs)
    })

    document.querySelector('ul').addEventListener('click', e => {
        e.target.style.textDecoration !== 'line-through' ?
            e.target.style.textDecoration = 'line-through' :
            e.target.style.textDecoration = 'none'
    })
})