const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const todoInput = todoForm.querySelector('input');
let toDoArray = [];
const TODO_KEY = 'todo';

function deleteTodo(event) {
  const delteLi = event.target.parentNode;
  toDoArray = toDoArray.filter((element) => {
    return element.id !== Number(delteLi.id);
  });
  saveTodo();
  delteLi.remove();
}
function paintTodo(eachToDo) {
  const li = document.createElement('li');
  li.id = eachToDo.id;
  const span = document.createElement('span');
  const toDoBtn = document.createElement('button');
  span.innerText = eachToDo.text;
  toDoBtn.innerText = '❌ ';
  toDoBtn.addEventListener('click', deleteTodo);
  li.appendChild(toDoBtn);
  li.appendChild(span);
  todoList.appendChild(li);
}
function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray));
}
function onSubmitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoArray.push(newTodoObj);
  saveTodo();
  paintTodo(newTodoObj);
}

const savedTodo = JSON.parse(localStorage.getItem(TODO_KEY));
if (savedTodo !== null) {
  toDoArray = savedTodo;
  toDoArray.forEach(paintTodo);
}

todoForm.addEventListener('submit', onSubmitTodo);
