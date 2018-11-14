let date = Date();
console.log('loaded', date);

document.addEventListener('DOMContentLoaded', ()=> {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(e);
  });
});
