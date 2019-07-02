var ul = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.querySelector('input');


todos = JSON.parse(localStorage.getItem('storage_todos')) || [];

function renderTodo() {
    ul.innerHTML = '';
    for (todo of todos) {
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        var atext = document.createTextNode('Excluir');
        a.appendChild(atext);


        var li = document.createElement('li');

        var pos = todos.indexOf(todo);
        a.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        var litext = document.createTextNode(todo);
        li.appendChild(litext);
        li.appendChild(a);
        ul.appendChild(li);
    }
}

renderTodo();

function addTodo() {
    todos.push(input.value);
    input.value = '';
    renderTodo();
    saveToStorage();
}


function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodo();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('storage_todos', JSON.stringify(todos));
}

button.onclick = addTodo;