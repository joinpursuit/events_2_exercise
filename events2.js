document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('button');
  let display = document.getElementById('addInput');
  let input = document.getElementById('textInput');
  let form = document.getElementById('listForm');

  function error () {
    let error = document.getElementById('error');
    error.innerText = 'Please input text!';;
    form.appendChild(error)
  }

  // function crossoutWord() {
  //   event.target
  // }


  button.addEventListener('click', event => {
    event.preventDefault();
    let create = document.createElement('li');
    if(input.value === "") {
      error();
      form.reset();
    }else {
      create.innerText = input.value
      event.target.parentNode.appendChild(create, event.target);
    }

  })

  display.addEventListener('click', event1 => {
    let line = document.createElement('li');
    if(event1.target.tagName === 'LI') {
      event1.target.style.textDecoration = 'line-through'
    }

  })

})
