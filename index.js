document.addEventListener("DOMContentLoaded", () => {
	let button = document.querySelector(".mybutton");
	let list = document.querySelector(".mylist");
	
	let error = document.createElement('p');
	error.innerText = "Cannot add empty To-Do";
	let message = document.body.appendChild(error);
	message.style.color = "red";
	message.style.display = "none";

	button.addEventListener("click", (event1) => {
		event1.preventDefault();

		let input = document.querySelector(".myinput");
		let newLi = document.createElement("li");

		if(input.value.length !== 0){
			list.appendChild(newLi);
			newLi.innerHTML = input.value + " <button>Remove</button>";
			input.value = null;
			message.style.display = "none";
		} else {
			message.style.display = "block";
		}
	});

	list.addEventListener("click", (event2) => {
		if(event2.target.tagName === "LI" && event2.target.style.textDecoration !== "line-through"){
			event2.target.style = "text-decoration: line-through";

		} else if (event2.target.style.textDecoration == "line-through"){
			event2.target.style = "text-decoration: none";
		}
	});
});
