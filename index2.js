
document.addEventListener('DOMContentLoaded', () => {

  let ul = document.getElementById('unordered_list');
  let submission = document.querySelector('#submission');
  let toDo = document.querySelector('.todo');

ul.addEventListener('click', (event) => {
  let todo = event.target;
  if (!todo.classList.contains('completed')) {
    todo.classList.add
  }
})


  function buildList() {
    submission.addEventListener('click', () => {
        let newNode = document.createElement('li');
        newNode.innerHTML = toDo.value;
        ul.append(newNode);
    })
  }

  buildList();

  function errorMessage() {
    if (!toDo.value) {
      document.querySelector('p').style.visibility = 'visible';
    }
    return errorMessage;
  }

  function complete() {
    let li = document.querySelector('#unordered_list');
    li.addEventListener('click', event => {
      event.target.style.textDecoration = 'line-through';
    })
    return complete;
  }





      let button = document.createElement('button');
      button.innerText = "Complete & Remove";
      ul.append(button);

      button.addEventListener('click', event => {
        console.log(event.target, event.currentTarget);
          ul.removeChild(event.target);
          li.style.visibility = 'hidden';
          button.style.visibility = 'hidden';
        })

  }
});
});
