import { refs } from "./refs";

const todo = {}

refs.form.addEventListener('input', onSaveTodo)

function onSaveTodo ({ target }) {
    const { name, value } = target

    todo[name] = value;

    console.log(todo);
    // console.log(value);
}