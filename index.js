document.addEventListener("DOMContentLoaded", () => {
	let button = document.querySelector(".mybutton");
	let list = document.querySelector(".mylist");
	// let alert = document.querySelector(".myptag");

	button.addEventListener("click", (event1) => {
		event1.preventDefault();

		let input = document.querySelector(".myinput").value;
		let newLi = document.createElement("li");

		if(input.length !== 0){
			list.appendChild(newLi);
			newLi.innerHTML = input + " <button>Remove</button>";
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
