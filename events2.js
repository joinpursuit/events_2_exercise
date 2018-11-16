document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('button');
  let display = document.getElementById('addInput');
  let input = document.getElementById('textInput');
  let form = document.getElementById('listForm');

  let error = document.getElementById('error');
  error.innerText = 'Please input text!';;
  form.appendChild(error)
  error.style.display = "none"
  // function error () {
  // }


  button.addEventListener('click', event => {
    event.preventDefault();
    let create = document.createElement('li');
    if(input.value === "") {
      // error();
      error.style.display = "block"
    }else {
      create.innerText = input.value
      display.appendChild(create, event.target);
      input.value = null
      error.style.display = "none"

    }
    // form.reset()

  })

  display.addEventListener('click', colorline => {
    if(colorline.target.tagName === 'LI') {
      colorline.target.style = "text-decoration: line-through";
    }
  })

})
