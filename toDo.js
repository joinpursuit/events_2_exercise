document.addEventListener('DOMContentLoaded', () => {
	let form  = document.querySelector('#form');
	let list = document.querySelector('#list');


	form.addEventListener('submit', (e) => {
		console.log(e);
		e.preventDefault();
		let value = document.querySelector('#make-toDo').value;
		let error = document.querySelector('#error');
		if(value !== ''){
			let newItem = document.createElement('li');
			let newButton = document.createElement('button');
			console.log(newButton);
			newButton.className = 'delete';
			newButton.innerText = 'Delete';
			newItem.innerText = value;
			newButton.addEventListener('click', () => {
				newButton.parentNode.parentNode.removeChild(newItem);
			})
			newItem.appendChild(newButton);
			list.appendChild(newItem);
			error.innerText = '';
			document.querySelector('#make-toDo').value = '';
		}
		else{
			error.innerText = 'Please enter a valid entry!'
			value = '';
		}

	})



	list.addEventListener('click', event => {
		if(event.target.style.textDecoration !== 'line-through'){
			event.target.style.textDecoration = 'line-through';
		}
		else {
			event.target.style.textDecoration = 'none'
		}	
	})


})

function deleteItem(e){
		console.log('ajdskljjlsajlksajlkalsjkjlasljsajlas');
	}

