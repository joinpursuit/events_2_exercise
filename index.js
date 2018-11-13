document.addEventListener('DOMContentLoaded', () => {

  let form = document.querySelector('form');
  let ul = document.querySelector('ul');
  let body = document.querySelector('body');
  let par = document.createElement('p');



  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let div = document.createElement('div');
    let liItem = document.createElement('li');
    let button = document.createElement('button');


    // // when item is clicked puts a line through then only if the item  has a line through will it then allow button to remove the item.
    liItem.addEventListener('click', (event) => {
      event.target.style = "text-decoration: line-through";

      if (event.target.style.textDecoration === "line-through") {
        button.addEventListener('click', (event) => {
            event.target.parentNode.remove();
        });
      }
    });

    // Problem - it also alerts just before deleting the node when the item is actually crossed off.
    button.addEventListener('click', (event) => {
      if (event.target.style.textDecoration !== "line-through"){
        alert('Please cross off items before attempting to delete.');
      }
    });

    if (document.querySelector('.textbox').value === '') {
      par.innerText = 'Error';
      body.append(par);

    } else {
      liItem.innerText = document.querySelector('.textbox').value;
      button.innerText = 'Button';
      div.append(liItem, button);
      ul.append(div)
      form.reset();


      // console.log([liItem][0].childNodes);
      // [liItem][0].childNodes.forEach(el=> {
      //   if (el === typeof string) {
      //     div.append(el,button);
      //   };
      // })
    }
  });


  });
