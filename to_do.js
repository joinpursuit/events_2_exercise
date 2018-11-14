const list = document.querySelector('.uList');
debugger
// delete item
// list.addEventListener('click', (event) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });

const forms = document.querySelector('.form');
debugger
Array(...forms).forEach(forms) => {
  console.log(forms);
});
debugger
const addForm = forms['form'];
document.addEventListener('submit', function(event){
  event.preventDefault();
  const value = document.querySelector('input[type="text"]').value;
  console.log(value);
});
