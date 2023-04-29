import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { uid } from 'uid';
import { refs } from './refs';
import storage from './storage';

let todo = {};
const LOCALKEY = 'todo';

refs.form.addEventListener('input', onSaveTodo);
refs.form.addEventListener('submit', onSendTodo);

function onSaveTodo({ target }) {
  const { name, value } = target;

  todo[name] = value;
  todo.id = uid();
  storage.save(LOCALKEY, todo);
}

function loadTodo() {
  const savedTodo = storage.load(LOCALKEY);
  // console.log(savedTodo);
  if (savedTodo) {
    for (let el in savedTodo) {
      refs.form[el].value = savedTodo[el];
      todo[el] = savedTodo[el];
    }
  }
}

loadTodo();

function onSendTodo(e) {
  e.preventDefault();
  if (!todo.text || !todo.priority) {
    Notify.failure('Заповніть усі поля!');
    return;
  }

  const markup = `<li> todo: ${todo.text}, priority: ${todo.priority} <button type="button" class="todo__delete" id=${uid()}></button> </li>`;
  refs.list.insertAdjacentHTML('beforeend', markup);
  Notify.success('todo додано');
  refs.form.reset();


  todo = {};
  storage.remove(LOCALKEY);
}

