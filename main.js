document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let input = document.querySelector('input');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let todo = input.value.trim();
    todo ? clearInputAddTodo(todo) : clearError();
    // console.log(input, input.value);
    //console.log(e, e.target);
  });
});

const clearInputAddTodo = (todo) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerText = `${todo}`;
  ul.appendChild(li);
  document.querySelector('input').value = '';
  if (errMsg.active) {
    errMsg.clear();
  }
};

const clearError = () => {
  document.querySelector('input').value = '';
  if (!errMsg.active) {
    errMsg.display();
  }
};

const errMsg = {
  active: false,
  clear: function () {
    this.active = false;
    document.querySelector('p').remove();
  },

  display: function () {
    this.active = true;
    let form = document.querySelector('form');
    let p = document.createElement('p');
    p.innerText = `Please enter a valid todo!`;
    form.appendChild(p);
  },
};
