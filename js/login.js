const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.getElementById('greeting');
const changeNameBtn = greeting.querySelector('button');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function paintGreeting(username) {
  const span = greeting.querySelector('span');
  span.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginInput.value = '';
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function login() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
}

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
  login();
} else {
  paintGreeting(savedName);
}

function changeName() {
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  login();
}

changeNameBtn.addEventListener('click', changeName);
