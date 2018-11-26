document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('user-input');
  let ul = document.getElementById('ul');
  let submit = document.getElementById('submit');
  let p = document.getElementById('p');
  submit.addEventListener('click', e => {
    e.preventDefault();
    if (input.value === '') {
      p.innerText = 'Error!';
    } else {
      let li = document.createElement('li');
      li.addEventListener('click', e => {
        li.style.textDecoration = 'line-through';
      });
      li.innerText = input.value;
      ul.appendChild(li);
      input.value = '';
    }
  });
});
