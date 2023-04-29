import { refs } from "./refs";
import storage from "./storage";
const todo = {}
const LOCALKEY = 'todo'; 
refs.form.addEventListener('input', onSaveTodo)

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