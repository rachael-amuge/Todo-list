const addBtn = document.getElementById('addBtn');
const textIn = document.getElementById('textInput');

const todoList = document.getElementById('list');

addBtn.addEventListener('click', function () {
    const text = document.createElement('li')
    text.textContent = textIn.value;
    textIn.value = "";

const listItems = document.getElementsByTagName('li');


    todoList.insertBefore(text, listItems[0]);
})
































// window.onload = function(){
//     let addBtn = document.getElementById('addBtn');
//     let textIn = document.getElementById('text-input');
//     let todoAdd = document.getElementById('todoAdd');

//     addBtn.addEventListener('click', function (){
//         var text = document.createElement('p')
//         text.classList.add('text.style')
//         text.innerText = ' '+ textIn.Value;
//         text.innerText = '';
//         todoAdd.appendChild(text)

//     })
// }