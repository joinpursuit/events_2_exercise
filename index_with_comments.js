//This function adds a string input to an unordered list
const add = (input) => { // Our input is a string
        // Calling the unorderedlist on our page
        let unorderedList = document.querySelector('#entries')

        // Creating two new elements the delete button and the list item 
        let newEntry = document.createElement('li') // <li></li>
        let deleteButton = document.createElement('button') // <button></button>

        // Replacing the empty list item text with our input parameter
        newEntry.innerText = input // <li>Input text goes here</li>

        // Setting the innerText of the delete button to `x` symbolic of delete
        deleteButton.innerText = `X` // <button>X</button>

        // Adding an event listener to the delete <button> to remove the list item all together
        deleteButton.addEventListener('click', () => {unorderedList.removeChild(newEntry)})

        // Adding that delete button to the end of the list item 
        newEntry.appendChild(deleteButton) // <li>Input text goes here<button>X</button></li>

        unorderedList.appendChild(newEntry) // adding our list item to our unordered list
        // <ul>
        //   <li>Input text goes here<button>X</button></li>
        // </ul>

        // Resetting the value of the textarea and the error <P></P> to empty(``)
        document.querySelector('textarea').value = ``
        // Error no longer display since our input was a valid input
        document.querySelector('p').innerText = ``
}
// End of add function 



// This function checks all the inputs to see whether they are valid or not
const processInputs = (input) => {
        // if the input is not empty(``) or not filled with only empty spaces then dont add
        if (!(input.split(``).every(e => e === ` `)) && input !== ``) {
                add(input) // Calling add funciton look for function above
        //Display an error in the only <p></p> tag then reset text area to empty
        } else if (!(input.split(``).every(e => e === ` `)) || input === ``) {
                document.querySelector('p').innerText = `Error please enter a valid input`
                document.querySelector('textarea').value = ``
        }
}

// This code only runs if the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {

        // This event listener is attached to the form and listens for a form submission
        // When the form is completed and the user presses button code block will run
        document.querySelector('form').addEventListener('submit', (e) => {

                // e is the event and .preventDefault stops the page from refreshing 
                e.preventDefault()

                // inputs is a collection of strings seperated by \n that is turned into 
                //   an array using .split(`\n`) 
                const inputs = document.querySelector('textarea').value.split('\n')
                // Becasue inputs is an array i can turn multiple lines into seperate inputs
                // ex: users types into textarea: 
                // `Buy milk
                // Buy sugar
                // Wash clothes
                // Do something else`
                // This string is acutally the same as: `Buy milk\nBuy sugar\nWash clothes\nDo something else`
                // Therefore spliting it will turn it into [`Buy milk`,`Buy sugar`,`Wash clothes`,`Do something else`]

                // The .forEach below will PROCESS the elements of the array we just made above.
                inputs.forEach(processInputs)
        })
        
        // This event listener outside of the one above because we are not submitting anything to the form
        document.querySelector('ul').addEventListener('click', e => {
                // The code below is a ternary statement((if this happens)?(do that):(otherwise do this)) AKA if(this){do that}Else{do this}
                // e is the event and we want to target that specific event AKA where we 'click'
                // The condition below checks it the line is crossed through or not
                e.target.style.textDecoration !== 'line-through' ?
                        // If its is NOT(!==) crossed through then cross it.
                        e.target.style.textDecoration = 'line-through' :
                        // If it is crossed through (meaning condition above is false) then undo it.
                        e.target.style.textDecoration = 'none'
        })
})