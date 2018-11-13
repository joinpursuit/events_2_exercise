document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('submit');
  let input = document.getElementById('myInput');
  let form = document.getElementById('todoform');
  let ul = document.getElementById('todolist');
  let myLis = document.getElementsByTagName('LI');

  let error = document.createElement('p');
  error.innerText = 'insert a valid input';
  let errorMes = document.body.appendChild(error);
  errorMes.style.display = 'none';

  button.addEventListener('click', event => {
    event.preventDefault();

    if (input.value.length === 0) {
      errorMes.style.display = 'block';
    } else {
      let newLi = document.createElement('li');
      newLi.innerText = input.value;
      ul.appendChild(newLi);
      input.value = null; //OR! form.reset();
      errorMes.style.display = 'none';
    }
  });

  ul.addEventListener('click', event1 => {
    if (event1.target.tagName === 'LI') {
      event1.target.style.textDecoration = 'line-through';
    }
  });
});
