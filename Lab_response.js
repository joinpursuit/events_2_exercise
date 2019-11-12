function add() {
  list.getElementById('theList').appendChild(userInput)
}
  let form = document.querySelector('form');
  form.addEventListener('submit',(evt)=>{
    let input = document.querySelector('input')
    let p = document.querySelector('p')
  evt.preventDefault()
  if(input.value){
  let ul = document.querySelector('ul')
  let li = document.createElement('li')
  li.innerText = input.value
  ul.addEventListener('click',(evt)=>{
  evt.target.style.textDecoration = "line-through"
 })
  ul.appendChild(li)
  p.innerText = ""
  input.value = ""
 }
  else{
    p.innerText = "Error."
  }
 })