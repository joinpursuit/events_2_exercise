
document.addEventListener('DOMContentLoaded', () => {

  let ul = document.getElementById('unordered_list');
  let submission = document.querySelector('#submission');
  let toDo = document.querySelector('.todo');

  submission.addEventListener('click', () => {
    if (!toDo.value) {
      document.querySelector('p').style.visibility = 'visible';
    } else {
      let newNode = document.createElement('li');
      newNode.innerText = toDo.value;
      ul.append(newNode);

      let li = document.querySelector('#unordered_list');
      li.addEventListener('click', event => {
        event.target.style.textDecoration = 'line-through';
      });

      // let button = document.createElement('button');
      // button.innerText = "Complete & Remove";
      // ul.append(button);
      //
      // button.addEventListener('click', event => {
      //   console.log(event.target, event.currentTarget);
      //     ul.removeChild(event.target);
      //     li.style.visibility = 'hidden';
      //     button.style.visibility = 'hidden';
      //   })

    }
});
});
