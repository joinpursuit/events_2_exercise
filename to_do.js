document.addEventListener('DOMContentLoaded', () => {

  // form input from user adds new li element at bottom of ul
    // pressing submit creates new li element; appends to end of ul

  let to_do = document.querySelector('.to_do');
  let form = document.querySelector('form');
  let submit = document.querySelector('#submit_item');
  let input = document.querySelector('#add_item');
  // let submit_item = document.


  // const removeItemButt = () => {
  //   let rmButt = document.createElement('button');
  //   rmButt.innerHTML = 'Remove';
  //   item.appendChild(rmButt)
  // }



  const addItem = () => {
    if (error()) {
      error().remove();
    }
    let item = document.createElement('li');
    item.innerHTML = input.value;
    to_do.appendChild(item);

    let rmButt = document.createElement('button');
    rmButt.innerHTML = 'Remove';
    item.appendChild(rmButt)

    rmButt.addEventListener('click', () => {
      item.remove();
    })

    form.reset();
  };
  // if user writes nothing; page shows error message
  // pressing submit when nothing is entered

  let errorMes = document.createElement('p');

  const error = () => {
        errorMes.innerHTML = `Please input a value.`;
        errorMes.style.color = 'red';
        return form.appendChild(errorMes);
  }


  const crossOff = (event) => {
    event.target.style.setProperty('text-decoration', 'line-through');
  }

  submit.addEventListener('click', (event) => {
    if (input.value.length > 0) {
    addItem();
  } else {
    error();
  }
    event.preventDefault();
})

  // submit.addEventListener('click', () => {
  //
  // })

// when user clicks on li; item strikes out
// pressing submit updates style of li to strikethrough

to_do.addEventListener('click', (event) => {
  crossOff(event);
})







});
