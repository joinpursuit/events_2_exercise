document.addEventListener('DOMContentLoaded', () => {

  // form input from user adds new li element at bottom of ul
    // pressing submit creates new li element; appends to end of ul

  let to_do = document.querySelector('.to_do');
  let form = document.querySelector('form');
  let submit = document.querySelector('#submit_item');
  let input = document.querySelector('#add_item');
  // let submit_item = document.

  const addItem = () => {
    let item = document.createElement('li');
    item.innerHTML = input.value;
    to_do.appendChild(item);
    form.reset();
  };
  // if user writes nothing; page shows error message
  // pressing submit when nothing is entered

  const error = () => {
    let errorMes = document.createElement('p');
    if (input.value.length < 1) {
       let throwErr = errorMes.innerHTML = `Please input a value.`;
       errorMes.style.color = 'red';
       form.appendChild(errorMes);
    }
  }

  const crossOff = (event) => {
    event.target;
  }

  submit.addEventListener('click', (event) => {
    if (input.value.length > 0) {
    addItem();
  } else {
    error();
  }
    event.preventDefault();

})

// when user clicks on li; item strikes out
// pressing submit updates style of li to strikethrough

to_do.addEventListener('click', (event) => {
  console.log(event.target)
  event.target.style.setProperty('text-decoration', 'line-through');
})







});
