document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let input = document.querySelector('input');
  let ul = document.querySelector('ul');

  ul.addEventListener('click', (e) => {
    // console.log(e, e.currentTarget, e.target);
    let todo = e.target;
    if (todo.classList.contains('todo')) {
      if (!todo.classList.contains('completed')) {
        todo.classList.add('completed');
        let btn = document.createElement('button');
        btn.innerText = 'X';
        btn.classList.add('remove');
        todo.parentNode.appendChild(btn);
      }
    } else if (todo.classList.contains('remove')) {
      todo.parentNode.remove();
      // console.log('remove', todo);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let todo = input.value.trim();
    todo ? clearInputAddTodo(todo) : clearError();
  });

});

const clearInputAddTodo = (todo) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  // li.classList.add('todo');
  let todoSlice = todo.length > 20 ? todo.slice(0, 20) : todo;
  // let todoSlice = todo;
  li.innerHTML = `<p class='todo'>${todoSlice}</p>`;
  // li.style.backgroundColor = getColor();
  ul.appendChild(li);
  document.querySelector('input').value = '';
  if (errMsg.active) {
    errMsg.clear();
  }
};

const rgb = () => (Math.floor(Math.random() * 256));

const getColor = ()=> ('rgb(' + rgb() + ',' + rgb() + ',' + rgb() + ')');

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
    p.classList.add('err');
    p.innerText = `Please enter a valid todo!`;
    form.appendChild(p);
  },
};
