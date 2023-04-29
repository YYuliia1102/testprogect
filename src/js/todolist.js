import { refs } from "./refs";
import storage from "./storage";
let todo = {}
const LOCALKEY = 'todo'; 

refs.form.addEventListener('input', onSaveTodo)
refs.form.addEventListener('submit', onSendTodo)

function onSaveTodo ({ target }) {
    const { name, value } = target

    todo[name] = value;

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
        alert("Заповніть усі поля!");
        return
    }

    console.log(todo);

    refs.form.reset();
    todo = {};
    storage.remove(LOCALKEY)
}